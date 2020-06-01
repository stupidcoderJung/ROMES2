//Gobal
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

//Products
const PRODUCTS = "/product";
const CREATE_PRODUCT = "/create_product";
const PRODUCT_DETAIL = "/:id";
const CHANGE_PRODUCT = "/:id/change";
const DELETE_PRODUCT = "/:id/delete";
const SEARTCH_PRODUCT = "/:id/search";

//object
const routes = {
  globalHome: HOME,
  globalJoin: JOIN,
  globalLogin: LOGIN,
  globalLogout: LOGOUT,

  productHome: PRODUCTS,
  productCreate: CREATE_PRODUCT,
  productDetail: PRODUCT_DETAIL,
  productChange: CHANGE_PRODUCT,
  productDelete: DELETE_PRODUCT,
  productSearch: SEARTCH_PRODUCT,
};

export default routes;
