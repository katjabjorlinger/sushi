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
    },
    template: `
      <div class="hero" :style="{ backgroundImage: 'url(' + background + ')' }">
        <div class="hero-content">
          <h1>{{ title }}</h1>
          <p>{{ subtitle }}</p>
        </div>
      </div>
    `,
  };
  