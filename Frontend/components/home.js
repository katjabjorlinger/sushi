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
        <section class="about-section">
            <h2 class="section-title">A DESTINATION</h2>
            <p class="section-text">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur.
            </p>
        </section>

        <Hero 
        title="Eat Together" 
        subtitle="Delicious sushi and an unforgettable experience." 
        background="../assets/restaurant-interior.jpg"
        :show-button="true" 
        />

    <section class="py-5 bg-white">
      <div class="container">
        <div class="row g-4">
          <!-- Crafted in the Kitchen -->
          <div class="col-12 col-md-4 text-center">
            <img src="../assets/card1.jpg" alt="Crafted in the Kitchen" class="feature-img"/>
            <h5 class="fw-bold text-uppercase">Crafted in the Kitchen</h5>
            <p class="text-muted">
             Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Nulla vitae elit libero a pharetra.
            </p>
          </div>

          <!-- Fresh Ingredients -->
          <div class="col-12 col-md-4 text-center">
            <img src="../assets/card2.jpg" alt="Fresh Ingredients" class="feature-img"/>
            <h5 class="fw-bold text-uppercase">Fresh Ingredients</h5>
            <p class="text-muted">
             Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Nulla vitae elit libero a pharetra..
            </p>
          </div>

          <!-- Master Chef -->
          <div class="col-12 col-md-4 text-center">
            <img src="../assets/card3.jpg" alt="Master Chef" class="feature-img"/>
            <h5 class="fw-bold text-uppercase">Master Chef</h5>
            <p class="text-muted">
             Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Nulla vitae elit libero a pharetra.
            </p>
          </div>
        </div>

        <!-- CTA-knapp -->
        <div class="row mt-4">
          <div class="col text-center">
            <router-link to="/menu" class="btn btn-outline-dark btn-lg rounded-pill px-4">
              View Menu
            </router-link>
          </div>
        </div>
      </div>
    </section>

        <section class="kitchen-section">
      <!-- Hero-bilden för The Kitchen -->
      <div class="kitchen-hero mb-5">
        <div class="kitchen-hero-overlay">
          <h2 class="kitchen-title">THE KITCHEN</h2>
        </div>
      </div>

      <!-- Chef-profiler -->
      <div class="container">
        <div class="row text-center gy-4">
          <div class="col-12 col-md-4">
            <h5 class="fw-bold">LIZ GRISAITIS</h5>
            <p class="text-uppercase text-muted small mb-3">Executive Chef</p>
            <p class="text-muted">
              Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor.
              Curabitur blandit tempus porttitor.
            </p>
          </div>
          <div class="col-12 col-md-4">
            <h5 class="fw-bold">MATTEO CAPON</h5>
            <p class="text-uppercase text-muted small mb-3">Chef de Cuisine</p>
            <p class="text-muted">
              Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor.
              Curabitur blandit tempus porttitor.
            </p>
          </div>
          <div class="col-12 col-md-4">
            <h5 class="fw-bold">ANGIE WALSH</h5>
            <p class="text-uppercase text-muted small mb-3">Pastry Chef</p>
            <p class="text-muted">
              Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor.
              Curabitur blandit tempus porttitor.
            </p>
          </div>
        </div>
      </div>
    </section>
        <!-- Bild mellan sektioner --> 
    <section class="container my-4">
       <img src="../assets/chef2.jpeg" alt="Resturant" class="img-fluid rounded shadow"/>
    </section>
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
