<template>
  <li>
    <div>{{appointment.petName}}</div>
    <div>{{appointment.petOwner}}</div>
    <div>{{appointment.aptDate}}</div>
    <div>{{appointment.aptNotes}}</div>
  </li>
</template>

<script lang='ts'>
  export default {
    name: 'AppointmentListItem',
    props: ['appointment']
  }
</script>
