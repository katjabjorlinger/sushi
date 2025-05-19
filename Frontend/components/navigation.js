export default {
  name: "Navigation",
  data() {
    return { lastScrollY: 0, isHidden: false, isSolid: false };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScroll = window.scrollY;
      this.isHidden = currentScroll > this.lastScrollY && currentScroll > 100
                     ? true
                     : (currentScroll < this.lastScrollY ? false : this.isHidden);
      this.isSolid = currentScroll > 50;
      this.lastScrollY = currentScroll;
    },
  },
  template: `
    <nav
      :class="[
        'navbar',
        'navbar-expand-md', 'text-white',
        isSolid
          ? 'fixed-top bg-dark navbar-dark'
          : 'position-absolute bg-transparent navbar-dark',
        isHidden ? 'translate-up' : '' 
      ]"
    >
      <div class="container-xxl">
        <router-link class="navbar-brand" to="/"><h1 class="h2 text-white">Omakase</h1></router-link>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#main-nav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="main-nav">
          <ul class="navbar-nav ">
            <li class="nav-item"><a class="nav-link" href="#/" @click.prevent="$router.push('/')">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#/menu" @click.prevent="$router.push('/menu')">Menu</a></li>
            <li class="nav-item"><a class="nav-link" href="#/booking" @click.prevent="$router.push('/booking')">Booking</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `,
};
