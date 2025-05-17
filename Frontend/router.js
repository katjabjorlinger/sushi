// router.js
const { createRouter, createWebHashHistory } = VueRouter;

import home from "./components/home.js";
import menu from "./components/menu.js";
import booking from "./components/booking.js";

// Definierar router
const routes = [
  { path: "/", component: home },
  { path: "/menu", component: menu },
  { path: "/booking", component: booking },
];

// Skapa router
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// Exporterar router som global variabel
export default router;
