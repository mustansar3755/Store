import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Array, required: true },
  category: { type: String, required: true },
  subCate: { type: String, required: true },
  bestSeller: { type: Boolean, required: true },
  sizes: { type: Array, required: true },
  date: { type: Number, required: true },
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;
