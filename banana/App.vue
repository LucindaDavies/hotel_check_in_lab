<template>
  <div id='app'>

  </div>
</template>

<script>

import BookingList from './components/BookingList.vue'
import BookingForm from './components/BookingForm.vue'

export default {
    name: 'app',
    data() {
        return {
            bookings: []
        }
    },
    components: {
        'booking-list': BookingList,
        'booking-form': BookingForm
    },
    mounted() {
        //fetch api
    }
}
</script>

<style>

</style>