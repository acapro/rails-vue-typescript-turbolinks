<template>
  <ul>
    <AppointmentListItem
      v-for="(item, i) in appointments"
      :appointment='item'
      :key="i" />
  </ul>
</template>

<script lang='ts'>
  import AppointmentListItem from './AppointmentListItem.vue'

  export default {
    name: 'AppointmentList',
    props: ['appointments'],
    components: {
      AppointmentListItem
    }
  }
</script>

<style scoped lang='sass'>
ul
  max-width: 50%
  margin: 0 auto
  background: yellow
  li
    padding-bottom: 25px
</style>
