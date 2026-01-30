import Brand from "@/models/Brand-model";
import Car from "@/models/Car-model";
import Category from "@/models/category-model";

import dbConnect from "@/service/mongo";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();

    // ১. আগের সব ডাটা মুছে ফেলা
    await Brand.deleteMany({});
    await Category.deleteMany({});
    await Car.deleteMany({});

    // ২. ব্র্যান্ড তৈরি
    const brands = await Brand.insertMany([
      { name: "Toyota" }, // index 0
      { name: "Honda" }, // index 1
      { name: "Nissan" }, // index 2
      { name: "Mitsubishi" }, // index 3
    ]);

    // ৩. ক্যাটাগরি তৈরি
    const categories = await Category.insertMany([
      { name: "SUV" }, // index 0
      { name: "Sedan" }, // index 1
      { name: "Hatchback" }, // index 2
    ]);

    // ৪. রিয়েল কার ডাটা (package ফিল্ড সহ)
    const carsData = [
      {
        name: "Toyota Axio G-Edition",
        price: 2850000,
        mainImage:
          "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb",
        gallery: [
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
          "https://images.unsplash.com/photo-1583121274602-3e2820c69888",
        ],
        engine: "1500cc VVT-i Hybrid",
        color: "Pearl White",
        mileage: "22,000 km",
        fuel: "Octane/Hybrid",
        seats: "5 Seats",
        modelYear: "2021",
        chassisNo: "NKE165-7054321",
        modelCode: "DBA-NKE165",
        transmission: "Automatic",
        brand: brands[0]._id,
        customerName: "Hafizur Rahman",
        customerMobile: "01746270507",
        category: categories[1]._id,
        tag: "New Arrival",
        au_grade: "4.5",
        cc: "1500cc",
        package: "G-Edition",
        description: "A stylish sedan with a modern design.",
        s_system: "Safety Sense",
      },
      {
        name: "Honda CR-V Turbo",
        price: 5200000,
        mainImage:
          "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7",
        gallery: [],
        engine: "1500cc VTEC Turbo",
        color: "Crystal Black",
        mileage: "12,500 km",
        fuel: "Octane",
        seats: "7 Seats",
        modelYear: "2022",
        customerName: "Mainul Inlam",
        customerMobile: "01746270507",
        chassisNo: "RW1-1209843",
        modelCode: "6BA-RW1",
        tag: "New Arrival",
        cc: "1500cc",
        package: "EX Masterpiece", // এটি রিকোয়ার্ড ছিল
        transmission: "CVT Automatic",
        au_grade: "5.0",
        description: "Powerful SUV with turbo engine.",
        s_system: "Honda Sensing",
        brand: brands[1]._id,
        category: categories[0]._id,
      },
      {
        name: "Mitsubishi Outlander",
        price: 5800000,
        mainImage:
          "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d",
        gallery: [],
        engine: "2400cc PHEV",
        color: "Titanium Gray",
        mileage: "8,000 km",
        fuel: "Plug-in Hybrid",
        customerName: "romin ",
        customerMobile: "01746270507",
        seats: "5 Seats",
        tag: "Premium",
        cc: "2400cc",
        package: "G Premium", // এটি রিকোয়ার্ড ছিল
        modelYear: "2023",
        chassisNo: "GG3W-0504321",
        modelCode: "5LA-GG3W",
        transmission: "Twin Motor 4WD",
        au_grade: "S Grade",
        description: "Eco-friendly powerful SUV.",
        s_system: "e-Assist",
        brand: brands[3]._id,
        category: categories[0]._id,
      },
    ];

    // const user = [
    //   {
    //     email: "mariamautomobilebd@gmail.com ",
    //     password: "mariamautomobilebd@",
    //   },
    // ];
    await Car.insertMany(carsData);

    // await userModel.insertMany(user);
    return NextResponse.json({
      success: true,
      message: "সব ডাটা (Package সহ) সফলভাবে ইনসার্ট হয়েছে!",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
