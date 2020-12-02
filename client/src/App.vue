<template>
  <div id='app'>
    <booking-form id="appform"></booking-form>
    <bookings-list :bookings="bookings"></bookings-list>
  </div>
</template>

<script>

import BookingsList from './components/BookingsList.vue'
import BookingForm from './components/BookingForm.vue'
import { eventBus } from './main.js'

export default {
    name: 'app',
    data() {
        return {
            bookings: [],
            newData: ""
        }
    },
    components: {
        'bookings-list': BookingsList,
        'booking-form': BookingForm
    },
    mounted() {
        fetch('http://localhost:3000/api/bookings')
        .then((res) => res.json())
        .then((data) => this.bookings = data)

        eventBus.$on("booking-added", (data) => {
          this.bookings.push(data)
        })
        eventBus.$on("delete-booking", (id) => {
          this.deleteBooking(id)
        })
    },
    methods: {
      deleteBooking(id) {
        const bookingsToKeep = this.bookings.filter(booking => booking._id !== id)
        this.bookings = bookingsToKeep
        
      }

    }
}
</script>

<style scoped>
  #appform {
    background-color: indianred;
    padding-inline: 300px;
  }
</style>
