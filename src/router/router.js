import Home from "./../pages/Home";
import Goods from "../pages/Goods";

const router = {
  home: {
    path: "/",
    component: Home,
    title: "Пиво"
  },
  goods: {
    path: "/goods",
    component: Goods
    // title: ""
  }
};

export default router;
