<template>
  <div class="contact-page">
    <div class="container my-5">
      <div class="my-5"></div>
      <div class="contact-container">
        <h4 class="my-2">Un projet, une question, un besoin ?</h4>
        <h1 class="contact-title my-3">Contactez-moi</h1>
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-group mb-3 text-start d-flex align-items-center">
            <label for="name" class="form-label w-25">Nom :</label>
            <input type="text" id="name" v-model="name" class="form-control w-75" required />
          </div>
          <div class="form-group mb-3 text-start d-flex align-items-center">
            <label for="surname" class="form-label w-25">Prénom :</label>
            <input type="text" id="surname" v-model="surname" class="form-control w-75" required />
          </div>
          <div class="form-group mb-3 text-start d-flex align-items-center">
            <label for="email" class="form-label w-25">Email :</label>
            <input type="email" id="email" v-model="email" class="form-control w-75" required />
          </div>
          <div class="form-group mb-3 text-start d-flex align-items-center">
            <label for="subject" class="form-label w-25">Sujet :</label>
            <select id="subject" v-model="subject" class="form-select w-75" required>
              <option disabled value="">Sélectionnez un sujet</option>
              <option value="Informatique">Informatique</option>
              <option value="escalade">Escalade</option>
              <option value="education">Éducation</option>
              <option value="autre">Autre</option>
            </select>
          </div>
          <div class="form-group mb-4 text-start d-flex align-items-start">
            <label for="message" class="form-label w-25">Message :</label>
            <textarea
              id="message"
              v-model="message"
              class="form-control w-75"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Envoyer le message</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContactPage',
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      subject: '',
      message: ''
    }
  },
  methods: {
    submitForm() {
      console.log(
        `Nom: ${this.name}, Prénom: ${this.surname}, Email: ${this.email}, Sujet: ${this.subject}, Message: ${this.message}`
      )
      this.name = ''
      this.surname = ''
      this.email = ''
      this.subject = ''
      this.message = ''
    }
  }
})
</script>

<style scoped>
.contact-page {
  background-color: #03224c;
  color: white;
  padding: 20px 0;
  height: 100vh;
}

.container {
  margin: auto;
  padding: 20px;
  max-width: 800px;
}

.contact-container {
  margin: auto;
  padding: 20px;
  max-width: 600px;
  background-color: #1e3a5f;
  border-radius: 8px;
}

.contact-title {
  font-size: 2.5rem;
  text-align: center;
}

.contact-form .form-control,
.contact-form .form-select {
  background-color: #2b4b73;
  color: white;
  border: 1px solid #4b6b96;
}

.contact-form .form-control:focus,
.contact-form .form-select:focus {
  background-color: #2b4b73;
  border-color: #5c83b2;
  box-shadow: none;
}

.btn-primary {
  background-color: #5c83b2;
  border-color: #5c83b2;
  width: 100%;
}

.btn-primary:hover {
  background-color: #4b6b96;
  border-color: #4b6b96;
}
</style>
