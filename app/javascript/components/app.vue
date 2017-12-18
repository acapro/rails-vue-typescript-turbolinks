<template>
  <div id="main-app">
    <AppointmentList
      :appointments = 'theAppointments'
    />
  </div>
</template>

<script lang='ts'>
import AppointmentList from './AppointmentList.vue'

export default {
  name: 'MainApp',
  data() {
    return {
      theAppointments: []
    }
  },

  components: {
    AppointmentList
  },

  created: function() {
    $.getJSON('/appointments.json')
      .done( info => {
        this.theAppointments = info;
      })
  }
}
</script>
