//export const [이름] = (req,res) => res.render("[pug view이름]",{넘겨줄 정보를 map 형식으로 만듬})

export const productSearch = (req, res) =>
  res.render("productsearch", { menuName: "Search" });

export const productHome = (req, res) =>
  res.render("productHome", { menuName: "제품목록" });
export const productCreate = (req, res) =>
  res.render("productCreate", { menuName: "product Upload" });
export const productDetail = (req, res) =>
  res.render("productDetail", { menuName: "product Detail" });
export const productEdit = (req, res) =>
  res.render("productEdit", { menuName: "product Edit" });
export const productDelet = (req, res) =>
  res.render("productDelet", { menuName: "product Delet" });
