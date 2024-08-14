<template>
  <div id="app">
    <Navbar />
    <router-view />
    <FooterView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './components/NavBar.vue'
import FooterView from './components/Footer.vue'

export default defineComponent({
  components: {
    Navbar,
    FooterView
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #333;
}
</style>
