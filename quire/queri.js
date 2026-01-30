// import BrandModel from "@/models/Brand-model";
// import CarModel from "@/models/Car-model";
// import dbConnect from "@/service/mongo";
// import categoryModel from "@/models/category-model";
// export async function getCar() {
//   await dbConnect();
//   const cars = await CarModel.find({}).populate(BrandModel);
//   return JSON.parse(JSON.stringify(cars));
// }

// import CarModel from "@/models/Car-model";
// import dbConnect from "@/service/mongo";

// export async function getCar() {
//   await dbConnect();

//   // .populate() এর ভেতরে আপনার Car স্কিমাতে দেওয়া ফিল্ডের নাম (String) দিতে হবে
//   // যেমন: car schema-তে আপনি লিখেছিলেন brand: { type: ..., ref: "Brand" }
//   const cars = await CarModel.find({})
//     .populate("brand") // এটি ফিল্ডের নাম, মডেল নয়
//     .populate("category") // ক্যাটাগরিকেও পপুলেট করা ভালো
//     .lean(); // lean() ব্যবহার করলে JSON.parse(JSON.stringify()) এর চেয়ে দ্রুত কাজ করে

//   // যদি lean() ব্যবহার না করেন তবে নিচের লাইনটি ঠিক আছে
//   return JSON.parse(JSON.stringify(cars));
// }

// import CarModel from "@/models/Car-model";
// import dbConnect from "@/service/mongo";
// // পপুলেট করার আগে অবশ্যই মডেলগুলো ইম্পোর্ট করতে হবে

// export async function getCar() {
//   await dbConnect();

//   try {
//     const cars = await CarModel.find({})
//       .populate("brand") // এটি আপনার Car Schema-র ফিল্ডের নাম
//       .populate("category") // এটিও Car Schema-র ফিল্ডের নাম
//       .lean();

//     // lean() ব্যবহার করলে ডাটা সরাসরি POJO (Plain Old JavaScript Object) হয়ে যায়
//     // ফলে Mongo-র Internal Object আইডিগুলো স্ট্রিং হয়ে যায়।
//     // তবুও Next.js এর সিরিয়ালাইজেশন সেফটির জন্য নিচের লাইনটি রাখা ভালো:
//     return JSON.parse(JSON.stringify(cars));
//   } catch (error) {
//     console.error("Error in getCar:", error);
//     return [];
//   }
// }
// import Review from "@/models/Review-model";

import CarModel from "@/models/Car-model";
import dbConnect from "@/service/mongo";

import Brand from "@/models/Brand-model";
import Category from "@/models/category-model";
import Review from "@/models/Review-model";

export async function getCar() {
  await dbConnect();

  try {
    const cars = await CarModel.find({ isSold: false })
      .populate({ path: "brand", model: Brand })
      .populate({ path: "category", model: Category })
      .lean();

    return JSON.parse(JSON.stringify(cars));
  } catch (error) {
    console.error("Error in getCar:", error);
    return [];
  }
}

export async function getSoldOut() {
  await dbConnect();

  try {
    const cars = await CarModel.find({})
      .populate({ path: "brand", model: Brand })
      .populate({ path: "category", model: Category })
      .lean();

    return JSON.parse(JSON.stringify(cars));
  } catch (error) {
    console.error("Error in getCar:", error);
    return [];
  }
}
export async function getReviw() {
  await dbConnect();
  try {
    const review = await Review.find({});
    const reviews = JSON.parse(JSON.stringify(review));
    return reviews;
  } catch (er) {
    return { er: "failt fetch" };
  }
}
