// app.js
import router from "./router.js"; // Importera din router korrekt

const { createApp } = Vue;

// Skapa vue-app
const app = createApp({
  template: `
    <router-view></router-view>
  `,
});

app.use(router);
app.mount("#app");
