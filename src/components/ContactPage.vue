<template>
  <div class="contact-page">
    <div class="container my-5">
      <div class="contact-container">
        <h4 class="my-2">{{ $t('Contact.title') }}</h4>
        <h1 class="contact-title my-3">{{ $t('Contact.contact-me') }}</h1>
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-group mb-3 text-start d-flex align-items-center">
            <label for="name" class="form-label w-25">{{ $t('Contact.Form.name') }} :</label>
            <input
              type="text"
              id="name"
              v-model="name"
              class="form-control w-75"
              minlength="2"
              required
            />
          </div>
          <div class="form-group mb-3 text-start d-flex align-items-center">
            <label for="surname" class="form-label w-25">{{ $t('Contact.Form.surname') }} :</label>
            <input
              type="text"
              id="surname"
              v-model="surname"
              class="form-control w-75"
              minlength="2"
              required
            />
          </div>
          <div class="form-group mb-3 text-start d-flex align-items-center">
            <label for="email" class="form-label w-25">{{ $t('Contact.Form.email') }} :</label>
            <input
              type="email"
              id="email"
              v-model="email"
              class="form-control w-75"
              required
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            />
          </div>
          <div class="form-group mb-3 text-start d-flex align-items-center">
            <label for="subject" class="form-label w-25">{{ $t('Contact.Form.subject') }} :</label>
            <select id="subject" v-model="subject" class="form-select w-75" required>
              <option disabled value="">{{ $t('Contact.Form.Subject.select') }}</option>
              <option value="Informatique">
                {{ $t('Contact.Form.Subject.computer-science') }}
              </option>
              <option value="escalade">{{ $t('Contact.Form.Subject.climbing') }}</option>
              <option value="education">{{ $t('Contact.Form.Subject.education') }}</option>
              <option value="autre">{{ $t('Contact.Form.Subject.other') }}</option>
            </select>
          </div>
          <div class="form-group mb-4 text-start d-flex align-items-start">
            <label for="message" class="form-label w-25">{{ $t('Contact.Form.message') }} :</label>
            <textarea
              id="message"
              v-model="message"
              class="form-control w-75"
              rows="5"
              minlength="10"
              maxlength="300"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            :disabled="loading || isRateLimited || maxEmailsReached"
          >
            <span v-if="loading">{{ $t('Contact.Form.loading') }}</span>
            <span v-else>{{ $t('Contact.Form.send') }}</span>
          </button>
          <div v-if="statusMessage" class="mt-3">{{ statusMessage }}</div>
          <div v-if="isRateLimited" class="mt-3 text-danger">
            {{ $t('Contact.Form.limit') }}
          </div>
          <div v-if="maxEmailsReached" class="mt-3 text-danger">
            {{ $t('Contact.Form.max-reached') }}
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
      maxEmails: 3,
      limitPeriod: 12 * 60 * 60 * 1000 // 12 heures en millisecondes
    }
  },
  created() {
    this.checkEmailLimits()
  },
  methods: {
    async submitForm() {
      if (this.loading || this.isRateLimited || this.maxEmailsReached) return

      const lastSent = localStorage.getItem('lastSent')
      const emailCount = parseInt(localStorage.getItem('emailCount') || '0', 10)
      const now = Date.now()

      // Réinitialisation si la période de 12 heures est passée
      if (!lastSent || now - lastSent >= this.limitPeriod) {
        localStorage.setItem('emailCount', '0')
        localStorage.setItem('lastSent', now)
      }

      if (emailCount >= this.maxEmails) {
        this.maxEmailsReached = true
        return
      }

      this.loading = true

      const templateParams = {
        from_name: `${this.name} ${this.surname}`,
        from_email: this.email,
        subject: this.subject,
        message: this.message
      }

      try {
        await emailjs.send(
          'service_5rxb8oc',
          'template_rkfs64i',
          templateParams,
          'F1ySnhe-WmvCPZpzx'
        )
        this.statusMessage = this.$t('Contact.Form.success')
        this.resetForm()
        localStorage.setItem('emailCount', (emailCount + 1).toString())
        this.checkEmailLimits()
      } catch (error) {
        console.error(this.$t('Contact.Form.error'), error)
        this.statusMessage = this.$t('Contact.Form.status-error')
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
