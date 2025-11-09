import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// Add new product

const addProduct = async (req, res) => {
  try {
    const { name, desc, price, category, subCate, bestSeller, sizes } =
      req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    // Upload Images to cloudinary and get url

    let imagesURL = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );
    // Store Data In MONGODB

    const productData = {
      name,
      desc,
      category,
      subCate,
      price: Number(price),
      bestSeller: bestSeller === "true" ? true : false,
      sizes: JSON.parse(sizes),
      image: imagesURL,
      date: Date.now(),
    };
    console.log(productData);
    const product = new productModel(productData);
    await product.save();
    res.json({ success: true, message: "Product Addedd Successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error Adding New File." });
  }
};
// list all product

const listProduct = async (req, res) => {
  try {
    const productList = await productModel.find({});
    res.json({ success: true, productList });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error Listing Products" });
  }
};
// Delete  product

const deleteProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product Deleted" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
// Single Product
const singleProduct = async (req, res) => {
  try {
    const { productID } = req.body;
    const product = await productModel.findById(productID);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addProduct, listProduct, deleteProduct, singleProduct };
