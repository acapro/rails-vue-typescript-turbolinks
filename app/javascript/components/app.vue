<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <ul v-for="(item, i) in theAppointments"
        :key="i">
      <li>
        {{item.petName}}
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'MainApp',
  data() {
    return {
      title: 'Appointments 2',
      theAppointments: []
    }
  },
  created: function() {
    $.getJSON('/appointments.json')
      .done( info => {
        this.theAppointments = info;
      })
  }
}
</script>

<style scoped lang='sass'>
ul
  background: green
</style>
