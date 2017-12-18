<template>
  <li>
    <div>{{appointment.petName}}</div>
    <div>{{appointment.petOwner}}</div>
    <div>{{this.formattedDate}}</div>
    <div>{{appointment.aptNotes}}</div>
  </li>
</template>

<script lang='ts'>
  export default {
    name: 'AppointmentListItem',
    props: ['appointment'],
    computed: {
      formattedDate: function() {
        return this.appointment.aptDate.substr(0,10)
      }
    }
  }
</script>
