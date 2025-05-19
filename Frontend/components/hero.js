//samma komponent med olika innehåll// components/hero.js
export default {
    name: "Hero",
    props: {
      title: {
        type: String,
        default: "Welcome to TSushi",
      },
      subtitle: {
        type: String,
        default: "The best place for sushi lovers.",
      },
      background: {
        type: String,
        default: "./images/hero-sushi.jpg", 
      },
      showButton: {
        type: Boolean,
        default: false
      }
    },
    template: `
      <div class="hero" :style="{ backgroundImage: 'url(' + background + ')' }">
        <div class="hero-content">
          <h1>{{ title }}</h1>
          <p>{{ subtitle }}</p>
          <router-link
        v-if="showButton"
        to="/booking"
        class="hero-btn"
>
  Make a Reservation
</router-link>

        </div>
      </div>
    `,
  };
  