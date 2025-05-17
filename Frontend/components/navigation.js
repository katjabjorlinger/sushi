// components/navigation.js
export default {
  name: "Navigation",
  template: `
   <nav
  class="navbar navbar-expand-md navbar-light pt-5 pb-4 sticky-top"
  style="background-color: none"
>
  <div class="container-xxl">
    <router-link class="navbar-brand" to="/">
      <h1 class="h2">Omakase</h1>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#main-nav"
      aria-controls="main-nav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse justify-content-end align-center"
      id="main-nav"
    >
      <ul class="navbar-nav">
        <!-- Här är länkar till respektive route -->

        <li class="nav-item">
          <a href="#/" @click.prevent="$router.push('/')">Home</a> |
        </li>
        <li class="nav-item">
          <a href="#/menu" @click.prevent="$router.push('/menu')">Menu</a> |
        </li>
        <li class="nav-item">
          <a href="#/booking" @click.prevent="$router.push('/booking')"
            >Booking</a
          >
        </li>
      </ul>
    </div>
  </div>
</nav>
`, };