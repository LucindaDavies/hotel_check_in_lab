<template>
  <div>
      <form class="booking-form">
          <label>Name:</label>
          <input type="text" v-model="name" required/>
          <label>Email:</label>
          <input type="email" v-model="email" required/>
          <label>Checked-in:</label>
          <input type="checkbox" v-model="checkedIn">
          <input type="submit" value="addBooking">
      </form>

  </div>
</template>

<script>

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
        }
    }

}
</script>

<style>

</style>
