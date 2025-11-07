import {
  addProduct,
  deleteProduct,
  listProduct,
  singleProduct
} from "../controllers/productController.js";
import express from 'express'

const productRouter = express.Router()


productRouter.post('/add',addProduct)
productRouter.get('/list',listProduct)
productRouter.post('/delete',deleteProduct)
productRouter.post('/single',singleProduct)

export default productRouter