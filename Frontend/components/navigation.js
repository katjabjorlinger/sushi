// components/navigation.js
export default {
    name: "Navigation", 
    template: `
      <nav>
        <a href="#/" @click.prevent="$router.push('/')">Home</a> |
        <a href="#/menu" @click.prevent="$router.push('/menu')">Menu</a> |
        <a href="#/booking" @click.prevent="$router.push('/booking')">Booking</a>
      </nav>
    `,
  };
  