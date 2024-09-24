<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><span style="color: #bedcff">HIPPO</span>rtfolio</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div :class="['collapse', 'navbar-collapse', { show: isNavbarOpen }]" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link" @click="closeNavbar">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about/code" class="nav-link" @click="closeNavbar"
              >Projets</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link" @click="closeNavbar">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'NavBar',
  setup() {
    const isNavbarOpen = ref(false)
    const router = useRouter()

    const toggleNavbar = () => {
      isNavbarOpen.value = !isNavbarOpen.value
    }

    const closeNavbar = () => {
      isNavbarOpen.value = false
    }

    watch(router.currentRoute, () => {
      closeNavbar()
    })

    return {
      isNavbarOpen,
      toggleNavbar,
      closeNavbar
    }
  }
})
</script>

<style scoped>
.navbar {
  position: fixed;
  z-index: 1000;
  width: 100%;
}
</style>
