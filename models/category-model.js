// import mongoose from "mongoose";

// const categorySchema = new mongoose.Schema({
//   name: { type: String },
// });

// export default mongoose.Models.Category ||
//   mongoose.model("Category", categorySchema);

import mongoose from "mongoose";

const shema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// mongoose.Models-এর 'M' ছোট হাতের হবে
// export default mongoose.models.Category || mongoose.model("Category", shema);

export default mongoose.models.Category || mongoose.model("Category", shema);
