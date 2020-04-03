import { lazy } from "react";

const Home = lazy(() => import("./../pages/Home"));
const Goods = lazy(() => import("./../pages/Goods"));
const Sidre = lazy(() => import("./../pages/Sidre"));

const router = {
  home: {
    path: "/",
    component: Home,
    title: "Пиво"
  },
  goods: {
    path: "/goods",
    component: Goods
  },
  sidre: {
    path: "/sidre",
    component: Sidre,
    title: "Сидр"
  },
  zakuski: {
    path: "/sidre",
    component: Sidre,
    title: "Закуски"
  }
};

export default router;
