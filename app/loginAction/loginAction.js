"use server";
import { signIn } from "@/auth";
import User from "@/models/Login-model";
import Review from "@/models/Review-model";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export async function RegisterForm(formDta) {
  const email = formDta.get("email");
  const password = formDta.get("password");

  const hsahpassword = await bcrypt.hash(password, 10);
  const newUser = {
    email,
    password: hsahpassword,
  };
  try {
    const res = await User.create(newUser);
    if (res) {
      redirect("/login");
    }
  } catch (err) {
    console.log(err);
  }
}

import dbConnect from "@/service/mongo";

import { AuthError } from "next-auth";
export async function loginnn(formData, callbackUrl) {
  try {
    const result = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (result?.error) {
      return { error: "ইমেইল অথবা পাসওয়ার্ড সঠিক নয়" };
    }

    return { success: true, redirectTo: callbackUrl || "/admin" };
  } catch (error) {
    if (error.message?.includes("NEXT_REDIRECT")) {
      throw error;
    }

    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        return { error: "ইমেইল অথবা পাসওয়ার্ড সঠিক নয়" };
      }
      return { error: "অ্যাকাউন্ট ভেরিফিকেশনে সমস্যা হয়েছে" };
    }

    return { error: "সার্ভারে সমস্যা হয়েছে।" };
  }
}
export async function ReviewSubmit(formdata) {
  const carId = formdata.get("carId");
  const imageFile = formdata.get("carImage");
  let mainImageData = formdata.get("existingImage") || "";

  if (imageFile && imageFile instanceof File && imageFile.size > 0) {
    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    mainImageData = `data:${imageFile.type};base64,${buffer.toString("base64")}`;
  }

  const costomerimage = formdata.get("customerImage");
  let customerImage = formdata.get("existingImage") || "";
  if (
    costomerimage &&
    costomerimage instanceof File &&
    costomerimage.size > 0
  ) {
    const bytes = await costomerimage.arrayBuffer();
    const buffer = Buffer.from(bytes);
    customerImage = `data:${costomerimage.type};base64,${buffer.toString("base64")}`;
  }
  try {
    await dbConnect();
    const reveiwData = {
      customerName: formdata.get("customerName"),
      customerImage: customerImage,
      carName: formdata.get("carName"),
      carImage: mainImageData,
      rating: formdata.get("rating"),
      reviewDate: formdata.get("reviewDate"),
      reviewText: formdata.get("reviewText"),
    };
    // const newuser = {
    //   customerImage,
    //   customerName,
    //   carImage,
    //   carName,
    //   rating,
    //   reviewDate,
    //   reviewText,
    // };
    if (carId) {
      await Review.findByIdAndUpdate(carId, reveiwData);
    } else {
      await Review.create(reveiwData);
    }
    revalidatePath("/admin");
  } catch (err) {
    return { err: "Review failed" };
  }
}
