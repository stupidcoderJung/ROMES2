import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "ROMES";
  res.locals.routes = routes;
  res.locals.openNav = () => {
    console.log("opneNav");
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  };
  res.locals.closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  };
  next();
};
