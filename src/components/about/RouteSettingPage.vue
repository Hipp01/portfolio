<template>
  <div class="route-setting-passion">
    <div class="route-setting-container">
      <h1 class="route-setting-title my-5">{{ $t('Routesetting.title') }}</h1>
      <p>
        {{ $t('Routesetting.description') }}
      </p>
      <h5 class="my-4">{{ $t('Routesetting.achievements') }}</h5>
      <div id="carouselRouteSetting" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators mb-0">
          <button
            type="button"
            data-bs-target="#carouselRouteSetting"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselRouteSetting"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselRouteSetting"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselRouteSetting"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner rounded">
          <div class="carousel-item active">
            <img :src="routeSetting1" class="d-block w-100" alt="Ouverture Bloc en Compétition" />
            <div class="carousel-caption d-none d-md-block py-1">
              <h5>{{ $t('Routesetting.Photos.1.title') }}</h5>
              <p class="mb-0">
                {{ $t('Routesetting.Photos.1.description') }}
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="routeSetting2" class="d-block w-100" alt="Ouverture en Club" />
            <div class="carousel-caption d-none d-md-block py-1">
              <h5>{{ $t('Routesetting.Photos.2.title') }}</h5>
              <p class="mb-0">
                {{ $t('Routesetting.Photos.2.description') }}
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              :src="routeSetting3"
              class="d-block w-100"
              alt="Ouverture de Voie en Compétition"
            />
            <div class="carousel-caption d-none d-md-block py-1">
              <h5>{{ $t('Routesetting.Photos.3.title') }}</h5>
              <p class="mb-0">
                {{ $t('Routesetting.Photos.3.description') }}
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="routeSetting4" class="d-block w-100" alt="Ouverture en salle privées" />
            <div class="carousel-caption d-none d-md-block py-1">
              <h5>{{ $t('Routesetting.Photos.4.title') }}</h5>
              <p class="mb-0">
                {{ $t('Routesetting.Photos.4.description') }}
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselRouteSetting"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselRouteSetting"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div id="experience" class="my-5">
        <h5 class="my-4 d-flex justify-content-center">{{ $t('Routesetting.experience') }}</h5>
        <ul class="text-start">
          <li>{{ $t('Routesetting.notableExperiences.1') }}</li>
          <li>{{ $t('Routesetting.notableExperiences.2') }}</li>
          <li>{{ $t('Routesetting.notableExperiences.3') }}</li>
          <li>{{ $t('Routesetting.notableExperiences.4') }}</li>
        </ul>
      </div>
      <div id="ouverture" class="my-5">
        <h5 class="my-4 d-flex justify-content-center">{{ $t('Routesetting.philosophy') }}</h5>
        <p>{{ $t('Routesetting.philosophyDescription') }}</p>
      </div>
      <div id="contact" class="my-5">
        <h5 class="text-secondary my-4">
          {{ $t('Routesetting.contact') }}
          <router-link to="/contact" class="nav-link text-info"
            >{{ $t('Routesetting.here') }}<span class="text-secondary">.</span></router-link
          >
        </h5>
      </div>
      <div id="climbing" class="my-5">
        <h5 class="text-secondary my-4">
          {{ $t('Routesetting.climbing') }}
          <router-link to="/about/climbing" class="nav-link text-warning">
            {{ $t('Routesetting.this-page') }}.
          </router-link>
        </h5>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RouteSetting1 from '../../assets/images/routesetting/1.jpg'
import RouteSetting2 from '../../assets/images/routesetting/2.jpg'
import RouteSetting3 from '../../assets/images/routesetting/3.jpg'
import RouteSetting4 from '../../assets/images/routesetting/4.jpg'

export default defineComponent({
  name: 'RouteSettingPage',
  data() {
    return {
      routeSetting1: RouteSetting1,
      routeSetting2: RouteSetting2,
      routeSetting3: RouteSetting3,
      routeSetting4: RouteSetting4
    }
  }
})
</script>

<style scoped>
.carousel-caption {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 5px;
}
.route-setting-passion {
  background-color: #03224c;
  padding: 20px 0;
  color: white;
}

.route-setting-container {
  margin: auto;
  padding: 20px;
  max-width: 800px;
}

.route-setting-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
}

@media (max-width: 768px) {
  .route-setting-title {
    font-size: 2rem;
  }
}
</style>
