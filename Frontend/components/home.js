import Footer from "./footer.js";
import Navigation from "./navigation.js";
import Hero from "./hero.js";

// components/home.js
export default {
  name: "Home",
  template: `
      <div>
        <Navigation />
        <main>
            <Hero 
            title="Welcome to Omakase" 
            subtitle="Delicious sushi and an unforgettable experience." 
            background="../assets/sushi.jpeg"
            />
        <section class="about container my-5">
            <h2 class="section-title">A DESTINATION</h2>
            <p class="section-text">
            Present commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
        </section>

        <Hero 
        title="Eat Together" 
        subtitle="Delicious sushi and an unforgettable experience." 
        background="../assets/restaurant-interior.jpg"
        />
    </main>
    <Footer />
      </div>
    `,
  components: {
    Navigation,
    Footer,
    Hero,
  },
};
