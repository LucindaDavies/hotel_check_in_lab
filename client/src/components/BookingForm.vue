<template>
  <div>
      <form class="booking-form" v-on:submit="addBooking">
          <label>Name:</label>
          <input type="text" v-model="name" required/>
          <label>Email:</label>
          <input type="email" v-model="email" required/>
          <label>Checked-in:</label>
          <input type="checkbox" v-model="checkedIn">
          <input type="submit" value="Add Booking" >
      </form>
        <hr>
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
            console.log(booking)
            fetch('http://localhost:3000/api/bookings', {
                method: "POST",
                body: JSON.stringify(booking),
                headers: {'Content-Type': 'application/json'}
            })
            .then((res) => res.json())
            .then((data) => {
                eventBus.$emit("booking-added", data)
            })

        }
    }

}
</script>

<style scoped>

input[type=submit] {
  display: block;
  border-radius: 5px;
  background-color: yellow;
  padding: 4px 10px 6px;
  margin: 1em 0;
  margin-top: 10px;
}


form{
    margin: auto;
}

</style>
