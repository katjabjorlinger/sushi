// Menu.js - Vue Component for TSushi
import Navigation from "./navigation.js";
import Hero from "./hero.js";
import Footer from "./footer.js";

export default {
  name: 'Menu',
  components: {
    Navigation,
    Hero, 
    Footer
  },
  data() {
    return {
      appetizers: [],
      main: [],
      additionalItems: []
    };
  },
  async created() {
    try {
      const response = await fetch('http://localhost:5001/api/menu');
      const menuItems = await response.json();

      this.appetizers = menuItems.filter(item => item.category === 'Appetizers');
      this.main = menuItems.filter(item => item.category === 'Main');
      this.additionalItems = menuItems.filter(item => item.category === 'Additional');
    } catch (error) {
      console.error('Error fetching menu:', error);
    }
  },
  template: `
    <div>
      <Navigation />
      <Hero 
            title="Menu" 
            subtitle="This mission is simple: serve delicious, affordable food that guests will want to return to week after week." 
            background="../assets/people.jpeg"
            />
      <section class="menu-section container my-5">
        <h2 class="menu-title">APPETIZERS</h2>
        <div class="menu-grid">
          <div v-for="item in appetizers" :key="item.id" class="menu-item">
            <div class="item-name-desc">
              <h3 class="item-name">{{ item.name }}</h3>
              <p class="item-desc">{{ item.description }}</p>
            </div>
            <div class="item-price">{{ item.price }}</div>
          </div>
        </div>

        <h2 class="menu-title">MAIN COURSES</h2>
        <div class="menu-grid">
          <div v-for="item in main" :key="item.id" class="menu-item">
            <div class="item-name-desc">
              <h3 class="item-name">{{ item.name }}</h3>
              <p class="item-desc">{{ item.description }}</p>
            </div>
            <div class="item-price">{{ item.price }}</div>
          </div>
        </div>

        <h2 class="menu-title">ADDITIONAL ITEMS</h2>
        <div class="menu-grid">
          <div v-for="item in additionalItems" :key="item.id" class="menu-item">
            <div class="item-name-desc">
              <h3 class="item-name">{{ item.name }}</h3>
              <p class="item-desc">{{ item.description }}</p>
            </div>
            <div class="item-price">{{ item.price }}</div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  `
};
