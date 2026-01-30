import mongoose from "mongoose";

const CarSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    mainImage: { type: String, required: true },
    gallery: [{ type: String }],

    buyingPrice: { type: Number, default: 0 },
    sellingPrice: { type: Number, default: 0 },
    isSold: { type: Boolean, default: false },
    soldAt: { type: Date, default: null },

    // স্পেসিফিকেশন
    engine: { type: String },
    color: { type: String },
    mileage: { type: String },
    fuel: { type: String },
    seats: { type: String },
    modelYear: { type: String },
    chassisNo: { type: String },
    modelCode: { type: String },
    customerName: { type: String },
    customerMobile: { type: String },
    transmission: { type: String },
    tag: { type: String },
    au_grade: { type: String },
    year: { type: String },
    description: { type: String },
    s_system: { type: String },
    package: { type: String },
    cc: { type: String },

    // রিলেশনাল ফিল্ডস
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Car || mongoose.model("Car", CarSchema);
