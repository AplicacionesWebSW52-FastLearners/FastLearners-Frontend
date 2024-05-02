<script>
import CustomToolbar from './components/CustomToolbar.vue'

export default {
  components: {
    CustomToolbar
  }
}
</script>

<template>
  <div id="app">
    <CustomToolbar />
    <RouterView />
  </div>
</template>

<style scoped>

</style>
