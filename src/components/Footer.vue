<template>
  <footer>
    <div class="footer-content">
      <span class="mx-4">&copy; 2024 Portfolio de Hippolyte Larzul. Tous droits réservés.</span>
      <a href="#" class="legal-link">Mentions légales</a>
      <!-- <a href="#" class="legal-link mx-2">Politique de confidentialité</a> -->
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #bedcff;
  color: #000000;
  text-align: center;
  font-size: 14px;
  margin-bottom: 0;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.legal-link {
  color: #000000;
  text-decoration: none;
}

.legal-link:hover {
  text-decoration: underline;
}
</style>
