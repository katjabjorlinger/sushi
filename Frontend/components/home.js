import Footer from "./footer.js";
import Navigation from "./navigation.js";

// components/home.js
export default {
    name: "Home",
    template: `
      <div>
        <Navigation />
        <main>
          <h1>Welcome to Sushi</h1>
          <p>This is the best place for sushi lovers.</p>
          <section>
            <h2>Our Menu</h2>
            <p>Explore our delicious sushi options.</p>
          </section>
          <section>
            <h2>Book a Table</h2>
            <p>Reserve your spot and enjoy a delightful experience.</p>
          </section>
        </main>
        <Footer />
      </div>
    `,
    components: {
      Navigation,
      Footer
    },
  };
  