import Navigation from "./navigation.js";

export default {
  name: "Booking",
  components: {
    Navigation, 
  },
  template: `
    <div>
      <Navigation />
      <h2>Booking Page</h2>
      <p>Boka din plats här.</p>
    </div>
  `,
};
