// import mongoose from "mongoose";

// const brand = new mongoose.Schema({
//   name: { type: String },
// });

// export default mongoose.Models.Brand || mongoose.model("Brand", brand);

import mongoose from "mongoose";

const brandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

// স্কিমার নাম 'brandSchema' ব্যবহার করা ভালো প্র্যাকটিস
export default mongoose.models.Brand || mongoose.model("Brand", brandSchema);
