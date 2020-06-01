//export const [이름] = (req,res) => res.render("[pug view이름]",{넘겨줄 정보를 map 형식으로 만듬})

export const productSearch = (req, res) =>
  res.render("productsearch", { pageTitle: "productsearch page" });

export const productHome = (req, res) =>
  res.render("productHome", { pageTitle: "product list" });
export const productCreate = (req, res) =>
  res.render("productCreate", { pageTitle: "product Upload" });
export const productDetail = (req, res) =>
  res.render("productDetail", { pageTitle: "product Detail" });
export const productEdit = (req, res) =>
  res.render("productEdit", { pageTitle: "product Edit" });
export const productDelet = (req, res) =>
  res.render("productDelet", { pageTitle: "product Delet" });
