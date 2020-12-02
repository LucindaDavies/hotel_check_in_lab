<template>
  <div>
    <ul>
        <li>
            <p>{{ booking.name }}</p>
            <p>{{ booking.email }}</p>
            <p>{{ booking.checkedIn }}</p>
            <button v-on:click="deleteBooking">Delete Booking</button>
        </li>
    </ul>      
  </div>
</template>

<script>

import { eventBus } from '../main.js'
export default {
    name: "bookings-list",
    props: ["bookings"],

    methods: {
      
    }
}
</script>

<style>

</style>