import express from "express";
import routes from "../routes";

import {
  productHome,
  productCreate,
  productEdit,
  productDelet,
  productDetail,
  productSearch,
} from "../controller/productController";

const productRouter = express.Router();

productRouter.get("/list", productHome);
productRouter.get(routes.productCreate, productCreate);
productRouter.get(routes.productChange, productEdit);
productRouter.get(routes.productDelete, productDelet);
productRouter.get(routes.productDetail, productDetail);
productRouter.get(routes.productSearch, productSearch);
export default productRouter;
