// app.js
const { createApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;

// Skapa dina komponenter (exempel)
const Home = {
  template: `<h2>Home Page</h2>`
};
const Menu = {
  template: `<h2>Menu Page</h2>`
};
const Booking = {
  template: `<h2>Booking Page</h2>`
};

// Definiera routerna
const routes = [
  { path: "/", component: Home },
  { path: "/menu", component: Menu },
  { path: "/booking", component: Booking },
];

// Skapa router
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// Skapa din Vue-applikation
const app = createApp({
  template: `
    <nav>
      <a href="/" @click.prevent="$router.push('/')">Home</a> |
      <a href="/menu" @click.prevent="$router.push('/menu')">Menu</a> |
      <a href="/booking" @click.prevent="$router.push('/booking')">Booking</a>
    </nav>
    <router-view></router-view>
  `,
});

app.use(router);
app.mount("#app");
