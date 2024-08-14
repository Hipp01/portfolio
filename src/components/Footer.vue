<template>
  <footer>
    <div class="footer-content">
      <span>&copy; 2024 Mon Portfolio. Tous droits réservés.</span>
      <a href="#" class="legal-link">Mentions légales</a>
      <a href="#" class="legal-link">Politique de confidentialité</a>
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
  position: static;
  bottom: 0;
  width: 100%;
  height: 40px;
  line-height: 60px;
  background-color: #d8beff;
  color: #fff;
  text-align: center;
  font-size: 14px;
  margin-bottom: 0;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.legal-link {
  color: #d8beff;
  text-decoration: none;
}

.legal-link:hover {
  text-decoration: underline;
}
</style>
