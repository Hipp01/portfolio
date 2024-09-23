<template>
  <div class="col">
    <a :href="link" target="_blank">
      <div :id="id" class="card h-100">
        <img :src="image" :alt="title" class="card-img-top img-fluid langage-logo" />
        <div class="card-body text-center">
          <h5 class="card-title">{{ title }}</h5>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    image: String,
    title: String,
    link: String
  }
}
</script>

<style scoped>
.langage-logo {
  width: 80%;
  margin: auto;
  margin-top: 10px;
  align-items: center;
}

.card-body {
  font-size: 1.5rem;
  align-content: end;
}

.card {
  border-radius: 10px;
  background-color: #0a3a71;
  color: white;
}

.card:hover {
  background-color: #024ca1;
}
</style>
