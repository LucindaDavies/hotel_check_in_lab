<template>
  <div>
    <ul>
        <li v-for="(booking, index) in bookings" :key="index">
            <p>{{ booking.name }}</p>
            <p>{{ booking.email }}</p>
            <p>{{ booking.checkedIn }}</p>
            <button v-on:click="deleteBooking(booking._id)">Delete Booking</button>
            <hr>
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
      deleteBooking(id){

        fetch('http://localhost:3000/api/bookings/' + id, {
          method: "DELETE"
        })
        .then((res) => res.json())
        .then((res) => eventBus.$emit("delete-booking",id))
      }
    }
}
</script>

<style scoped>


button {
  display: block;
  border-radius: 5px;
  background-color: red;
  padding: 4px 10px 6px;
  margin: 1em 0;
}
</style>