<template>
  <footer>
    <div class="footer-container">
      <div v-if="this.$route.path !== '/'">
        <button class="back-button pt-1" @click="goBack">
          <i class="fas fa-arrow-left"></i>
        </button>
      </div>
      <div class="footer-content">
        <span class="mx-4">&copy; 2024 {{ $t('Footer') }}</span>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterComonent',
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
})
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #bedcff;
  color: #000000;
  font-size: 14px;
  margin-bottom: 0;
  height: 35px;
  padding-top: 7px;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.back-button {
  background-color: transparent;
  border: none;
  color: #000000;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
}

.back-button i {
  margin-right: 8px;
}

.back-button:hover {
  color: #ffffff;
}

.back-button:focus {
  outline: none;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  text-align: center;
}

.legal-link {
  color: #000000;
  text-decoration: none;
  margin-left: 10px;
}

.legal-link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  footer {
    height: 50px;
  }
}
</style>
