<template>
  <div id='app'>
    <booking-form></booking-form>
    <bookings-list></bookings-list>
  </div>
</template>

<script>

import BookingsList from './components/BookingsList.vue'
import BookingForm from './components/BookingForm.vue'

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
        //fetch api
    }
}
</script>

<style>

</style>
