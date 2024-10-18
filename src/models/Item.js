import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    purchased: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Item", itemSchema);
