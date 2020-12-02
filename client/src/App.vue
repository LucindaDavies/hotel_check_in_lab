<template>
  <div id='app'>
    <booking-form></booking-form>
    <bookings-list></bookings-list>
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
    }
}
</script>

<style>

</style>
