// router.js
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./components/home.js";
import Menu from "./components/menu.js";


const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/menu", name: "menu", component: Menu },
  { path: "/booking", name: "booking", }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
