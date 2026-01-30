import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    customerImage: { type: String, required: true },
    carName: { type: String, required: true },
    carImage: { type: String, required: true },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
      default: 5,
    },
    reviewDate: { type: Date, required: true },
    reviewText: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "published"],
      default: "published",
    },
  },
  { timestamps: true },
);

const Review = mongoose.models.Review || mongoose.model("Review", ReviewSchema);
export default Review;
