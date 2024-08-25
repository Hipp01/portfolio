<template>
  <div class="contact-page">
    <div class="container my-5">
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
          <button
            type="submit"
            class="btn btn-primary"
            :disabled="loading || isRateLimited || maxEmailsReached"
          >
            <span v-if="loading">Envoi en cours...</span>
            <span v-else>Envoyer le message</span>
          </button>
          <div v-if="statusMessage" class="mt-3">{{ statusMessage }}</div>
          <div v-if="isRateLimited" class="mt-3 text-danger">
            Vous avez atteint la limite d'envoi pour cette période. Essayez plus tard.
          </div>
          <div v-if="maxEmailsReached" class="mt-3 text-danger">
            Vous avez atteint la limite maximale d'envoi de messages.
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  name: 'ContactPage',
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      subject: '',
      message: '',
      statusMessage: '',
      loading: false,
      isRateLimited: false,
      maxEmailsReached: false,
      maxEmails: 3
    }
  },
  created() {
    this.checkEmailLimits()
  },
  methods: {
    async submitForm() {
      if (this.loading || this.isRateLimited || this.maxEmailsReached) return

      // Check rate limit from local storage
      const lastSent = localStorage.getItem('lastSent')
      const emailCount = parseInt(localStorage.getItem('emailCount') || '0', 10)
      const now = Date.now()
      const limitPeriod = 60 * 60 * 1000 // 1 hour limit

      if (lastSent && now - lastSent < limitPeriod) {
        this.isRateLimited = true
        return
      }

      if (emailCount >= this.maxEmails) {
        this.maxEmailsReached = true
        return
      }

      this.loading = true

      // Prepare data for EmailJS
      const templateParams = {
        from_name: `${this.name} ${this.surname}`,
        from_email: this.email,
        subject: this.subject,
        message: this.message
      }

      try {
        // Send message via EmailJS
        await emailjs.send(
          'service_5rxb8oc',
          'template_rkfs64i',
          templateParams,
          'F1ySnhe-WmvCPZpzx'
        )
        this.statusMessage = 'Votre message a été envoyé avec succès !'
        this.resetForm()
        localStorage.setItem('lastSent', now)
        localStorage.setItem('emailCount', (emailCount + 1).toString())
        this.checkEmailLimits()
      } catch (error) {
        console.error("Erreur lors de l'envoi du message:", error)
        this.statusMessage = 'Une erreur est survenue, veuillez réessayer plus tard.'
      } finally {
        this.loading = false
      }
    },
    resetForm() {
      this.name = ''
      this.surname = ''
      this.email = ''
      this.subject = ''
      this.message = ''
    },
    checkEmailLimits() {
      const emailCount = parseInt(localStorage.getItem('emailCount') || '0', 10)
      if (emailCount >= this.maxEmails) {
        this.maxEmailsReached = true
      }
    }
  }
}
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

@media (max-width: 1024px) {
  .contact-page {
    height: auto;
  }
}
</style>
