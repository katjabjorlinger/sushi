
import Hero from "./hero.js";
import Footer from "./footer.js";
import Navigation from "./navigation.js";

export default {
  name: "Booking",
  components: {
    Navigation,
    Hero, 
    Footer
  },
  template: `
    <div>
      <Navigation/>
      <Hero 
            title="Reservation" 
            subtitle="We accept a limited number of reservations up to one month in advance for parties of up to ten guests." 
            background="../assets/lamps.jpeg"
            />
        
      <section class="container my-5">
        <div class="p-4 rounded shadow-sm">

      <!-- Sök efter ledig tid -->  
          <form @submit.prevent="fetchAvailableTimes" class="row g-3 align-items-end">
             <div class="col-md-4">
              <label for="date" class="form-label">Date</label>
              <input type="date" v-model="date" :min="today" class="form-control bg-body-secondary" required/>
             </div>

            <div class="col-md-4">
              <label for="guests" class="form-label">Antal personer</label>
              <select v-model="guests" class="form-select bg-body-secondary" required>
                <option disabled value="">Välj antal...</option>
                <option v-for="n in 8" :key="n" :value="n">{{ n }} personer</option>
              </select>
            </div>

            <div class="col-md-4 d-grid">
              <button type="submit" class="btn btn-dark">Sök lediga tider</button>

            </div>
           </form>
         </div>
      </section>

      <!-- Lediga tider --> 
      <section class="container my-5">
        <h3 class="mb-4 text-center">Choose a time</h3>

        <div v-if="times.length > 0" class="row  g-4 justify-content-center">
          <div v-for="slot in times" :key="slot.time_id" class="col-md-4">
            <div class="card text-center shadow-sm h-100">
              <div class="card-body">
                <h5 class="card-title">{{ slot.time }}</h5>
                <p class="card-title">Table for max {{ slot.max_guests }} people</p>

                <button @click="reserve(slot)" class="btn btn-outline-dark">Reserve</button>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="searched" class="alert alert-secondary text-center mt-4" role="alert">
          <i class="bi bi-calendar-x"></i> Inga lediga tider för {{ date }} 
        </div>
      </section>
    </div>

<!-- Modal -->
    <div class="modal fade" id="bookingModal" tabindex="-1" aria-labelledby="bookingModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="bookingModalLabel">Boka tid</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Stäng"></button>
          </div>
          <div class="modal-body text-start">

            <div v-if="!bookingConfirmed">
              <p class="mb-3 fw-bold text-center">
                {{ new Date(date).toLocaleDateString("sv-SE") }} - {{ selectedTime?.time }}
              </p>
              <form @submit.prevent="submitReservation">
                <div class="mb-3">
                  <label for="booking-name" class="form-label">Namn</label>
                  <input id="booking-name" v-model="name" type="text" class="form-control" placeholder="Namn" required />
                </div>
                <div class="mb-3">
                  <label for="booking-email" class="form-label">E-post</label>
                  <input id="booking-email" v-model="email" type="email" class="form-control" placeholder="example@mail.com" required />
                </div>
                <button type="submit" class="btn btn-dark w-100">Bekräfta bokning</button>
              </form>
            </div>

            <div v-else class="text-center">
              <h5 class="mb-3">Bokning bekräftad! 🍣</h5>
              <div class="bg-light p-3 rounded">
                <p>{{ name }}</p>
                <p>{{ new Date(date).toLocaleDateString("sv-SE") }}</p>
                <p>{{ guests }} personer</p>
              </div>
              <button type="button" class="btn btn-dark mt-4" data-bs-dismiss="modal" @click="resetModal">Stäng</button>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- Info/bildsektioner --> 
    <section class="container my-5">
      <div class="row g-4">
        <div class="col-md-6">
          <div class="card h-100 border-0">
           <div class="card-body">
             <h3 class="card-title"> By Phone </h3>
             <p class="card-text"> 
             Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor.
             </p>
          </div>
        </div>
      </div>
      <div class="col-md-6">  
       <div class="card h-100 border-0">
         <div class="card-body">
           <h3 class="card-title"> Special Events & Private Parties</h3>
           <p class="card-text">
             Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor.
            </p>
           </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bild mellan sektioner --> 
    <section class="container my-4">
       <img src="../assets/people.jpeg" alt="Resturant" class="img-fluid rounded shadow"/>
    </section>

    <!-- Rum --> 
    <section class="container my-5">
       <div class="row g-4">
        <div class="col-md-6">
          <div class="card h-100 border-0">
            <div class="card-body">
              <h3 class="card-title">The Big Room</h3>
              <h5 class="fw-semibold mb-3">Seats up to 60</h5>
              <p class="card-text">
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card h-100 border-0">
           <div class="card-body">
             <h3 class="card-title"> The Small Room </h3>
             <h5 class="fw-semibold mb-3">Seats up to 10</h5>
             <p class="card-text">
             Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes.
             </p> 
            </div>
          </div>
        </div>
        </div>
      </section>

      <!-- Call texten --> 
      <section class="container my-5 text-center">
        <p class="display-6 fw-bold text-uppercase">
        Call <span class="text-decoration-underline">(555) 555-5555</span>to reserve a room for your reception or party.
        </p>
      </section>
      <Footer/>
  `,
  data() {
    const today = new Date().toISOString().split("T")[0];
    return {
      date: today,
      today: today,
      guests: '',
      times: [],
      searched: false,
      reservationForm: null,
      name: '',
      email: '',
      showModal: false,
      selectedTime: null,
      bookingConfirmed: false
    };
  },
  methods: {
    async fetchAvailableTimes() {
      this.searched = true;
      const res = await fetch(`http://localhost:5001/api/available?date=${this.date}&guests=${this.guests}`);
      this.times = await res.json();
    },
    reserve(slot) {
      this.selectedTime = slot;
      this.name = '';
      this.email = '';
      this.bookingConfirmed = false; 

      const modal = new bootstrap.Modal(document.getElementById('bookingModal'));
      modal.show();
    },
    cancelReservation(){
      this.reservationForm = null;
      this.name = '',
      this.email = '';
    },
    async submitReservation() {
      const body = {
        name: this.name,
        email: this.email,
        guests: this.guests,
        time_id: this.selectedTime.time_id
      };
      const res = await fetch("http://localhost:5001/api/book", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (res.ok) {
        this.bookingConfirmed = true; 
      } else {
        alert("Något gick fel!");
      }
    },

    closeModal() {
      this.showModal = false;
      this.selectedTime = null;
      this.name = '';
      this.email = '';

    },

    resetModal() {
      this.selectedTime = null;
      this.name = '';
      this.email = '';
      this.bookingConfirmed = false;
    }
  }
};
