export default {
    name: 'Navigation',

template:`
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/menu">Menu</router-link></li>
      <li><router-link to="/booking">Booking</router-link></li>
    </ul>
  </nav>
</template>`

}