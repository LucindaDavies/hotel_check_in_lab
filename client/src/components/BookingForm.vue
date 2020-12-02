<template>
  <div>
      <form class="booking-form">
          <label>Name:</label>
          <input type="text" v-model="name" required/>
          <label>Email:</label>
          <input type="email" v-model="email" required/>
          <label>Checked-in:</label>
          <input type="checkbox" v-model="checkedIn">
          <input type="submit" value="add booking">
      </form>

  </div>
</template>

<script>

import { eventBus } from '../main.js'

export default {

    
    name: 'booking-form',
    data(){
        return {
            name: "",
            email: "",
            checkedIn: false
        }
    },
    methods: {
        addBooking(){
            const booking = {
                name: this.name,
                email: this.email,
                checkedIn: this.checkedIn
            }
            fetch('http://localhost:3000/api/bookings', {
                method: "POST",
                body: JSON.stringify(booking),
                headers: {'Content-Type': 'application/json'}
            })
            .then((res) => res.json())
            .then((data) => {
                eventBus.$emit("booking-added", data)
            })
            this.name = ""
            this.email = ""
            this.checkedIn = false
        }
    }

}
</script>

<style>

</style>
