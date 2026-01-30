"use server";
import CarModel from "@/models/Car-model";
import Review from "@/models/Review-model";
import dbConnect from "@/service/mongo";
import { revalidatePath } from "next/cache";
export async function deleteCar(id) {
  await dbConnect();

  try {
    await CarModel.findByIdAndDelete(id);
    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Registration failed:", error);

    return { error: "crea delete failed" };
  }
}

export async function createcar(formData) {
  try {
    await dbConnect();

    const carId = formData.get("carId");

    // 1. Single Image (Main Image) logic
    const imageFile = formData.get("mainImage");
    let mainImageData = formData.get("existingImage") || "";

    if (imageFile && imageFile instanceof File && imageFile.size > 0) {
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      mainImageData = `data:${imageFile.type};base64,${buffer.toString("base64")}`;
    }

    // 2. Multiple Images (Gallery) logic
    // formData.getAll babohar korte hobe jodi input-e 'multiple' thake
    const galleryFiles = formData.getAll("gallery");
    let galleryDataArray = [];

    for (const file of galleryFiles) {
      // Jodi user file upload kore thake
      if (file instanceof File && file.size > 0) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;
        galleryDataArray.push(base64);
      }
      // Jodi user comma separated URL diye thake (input text hole)
      else if (typeof file === "string" && file.trim() !== "") {
        const urls = file.split(",").map((url) => url.trim());
        galleryDataArray.push(...urls);
      }
    }

    const carData = {
      name: formData.get("name"),
      price: Number(formData.get("price")),
      tag: formData.get("tag"),
      engine: formData.get("engine"),
      cc: formData.get("cc"),
      color: formData.get("color"),
      mileage: formData.get("mileage"),
      fuel: formData.get("fuel"),
      transmission: formData.get("transmission"),
      modelYear: formData.get("modelYear"),
      chassisNo: formData.get("chassisNo"),
      modelCode: formData.get("modelCode"),
      package: formData.get("package"),
      au_grade: formData.get("au_grade"),
      seats: formData.get("seats"),
      s_system: formData.get("s_system"),
      brand: formData.get("brand"),
      category: formData.get("category"),
      mainImage: mainImageData,
      gallery: galleryDataArray,
      description: formData.get("description"),
    };

    if (carId) {
      await CarModel.findByIdAndUpdate(carId, carData);
    } else {
      await CarModel.create(carData);
    }

    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
export const markAsSold = async (carId, inputData) => {
  try {
    await dbConnect();

    const ADMIN_PASSWORD = process.env.ADMIN_MODAL_PASSWORD;
    if (inputData.password !== ADMIN_PASSWORD) {
      return { success: false, error: "ভুল পাসওয়ার্ড! আবার চেষ্টা করুন।" };
    }

    const updatedCar = await CarModel.findByIdAndUpdate(
      carId,
      {
        $set: {
          isSold: true,
          status: "Sold",
          buyingPrice: Number(inputData.buyingPrice),
          sellingPrice: Number(inputData.sellingPrice),
          customerName: inputData.customerName,
          customerMobile: inputData.customerMobile,
          soldAt: new Date(),
        },
      },
      { new: true },
    );

    if (!updatedCar) {
      return { success: false, error: "গাড়িটি ডাটাবেজে পাওয়া যায়নি!" };
    }

    revalidatePath("/admin");
    revalidatePath("/admin/sold-cars");
    revalidatePath("/inventory");

    return { success: true };
  } catch (error) {
    console.error("Sold Out Action Error:", error);
    return { success: false, error: "সার্ভারে সমস্যা হয়েছে।" };
  }
};
export async function getReviw() {
  await dbConnect();
  try {
    const review = await Review.find({});
    return JSON.parse(JSON.stringify(review));
  } catch (err) {
    return { success: false, error: "সার্ভারে সমস্যা হয়েছে।" };
  }
}

export async function deleteReviewCar(id) {
  await dbConnect();

  try {
    await Review.findByIdAndDelete(id);
    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    return { error: "car delete failed" };
  }
}
