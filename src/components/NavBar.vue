<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><span style="color: #bedcff">HIPPO</span>rtfolio</a>

      <div v-if="!isNotMobileView">
        <div class="dropdown" style="text-align: -webkit-center">
          <button
            class="btn btn-secondary dropdown-toggle d-flex"
            type="button"
            id="languageDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <flag
              :iso="currentLanguage === 'fr' ? 'fr' : 'gb'"
              style="font-size: 20px; margin-right: 10px"
            />
            {{ currentLanguage === 'fr' ? 'Fr' : 'En' }}
          </button>
          <ul id="ulLanguageDropdown" class="dropdown-menu" aria-labelledby="languageDropdown">
            <li>
              <a class="dropdown-item" href="#" @click.prevent="changeLanguage('en')">
                <flag iso="gb" style="font-size: 20px; margin-right: 10px" />
                English
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#" @click.prevent="changeLanguage('fr')">
                <flag iso="fr" style="font-size: 20px; margin-right: 10px" />
                Français
              </a>
            </li>
          </ul>
        </div>
      </div>
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
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" @click="closeNavbar">{{
              $t('Navbar.home')
            }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about/code" class="nav-link" @click="closeNavbar">{{
              $t('Navbar.projects')
            }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link" @click="closeNavbar">{{
              $t('Navbar.contact')
            }}</router-link>
          </li>
        </ul>

        <div v-if="isNotMobileView" class="dropdown mx-2" style="text-align: -webkit-center">
          <button
            class="btn btn-secondary dropdown-toggle d-flex"
            type="button"
            id="languageDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <flag
              :iso="currentLanguage === 'fr' ? 'fr' : 'gb'"
              style="font-size: 20px; margin-right: 10px"
            />
            {{ currentLanguage === 'fr' ? 'Français' : 'English' }}
          </button>
          <ul
            id="ulLanguageDropdown"
            class="dropdown-menu"
            style="min-width: 0"
            aria-labelledby="languageDropdown"
          >
            <li>
              <a class="dropdown-item pe-3" href="#" @click.prevent="changeLanguage('en')">
                <flag iso="gb" style="font-size: 20px; margin-right: 10px" />
                English
              </a>
            </li>
            <li>
              <a class="dropdown-item pe-3" href="#" @click.prevent="changeLanguage('fr')">
                <flag iso="fr" style="font-size: 20px; margin-right: 10px" />
                Français
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'NavBar',
  setup() {
    const isNavbarOpen = ref(false)
    const router = useRouter()
    const { locale } = useI18n()
    const isNotMobileView = ref(window.innerWidth > 768)

    const currentLanguage = ref(localStorage.getItem('language') || locale.value)

    const changeLanguage = (lang: string) => {
      currentLanguage.value = lang
      locale.value = lang
      localStorage.setItem('language', lang)
    }

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
      closeNavbar,
      currentLanguage,
      changeLanguage,
      isNotMobileView
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

#languageDropdown::after {
  display: none;
}
</style>
