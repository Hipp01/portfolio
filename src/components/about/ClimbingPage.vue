<template>
  <div class="climb-passion">
    <div class="climb-container">
      <h1 class="climb-title my-5">{{ $t('Climbing.title') }}</h1>
      <p>
        {{ $t('Climbing.description') }}
      </p>
      <h5 class="my-4">{{ $t('Climbing.achievements') }}</h5>
      <div id="carouselCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner rounded">
          <div class="carousel-item active">
            <img :src="climbing1" class="d-block w-100" alt="Compétition Villeneuve d'Ascq" />
            <div class="carousel-caption d-none d-md-block">
              <h5>{{ $t('Climbing.Photos.1.title') }}</h5>
              <p>{{ $t('Climbing.Photos.1.description') }}</p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="climbing2" class="d-block w-100" alt="Escalade de vitesse" />
            <div class="carousel-caption d-none d-md-block">
              <h5>{{ $t('Climbing.Photos.2.title') }}</h5>
              <p>{{ $t('Climbing.Photos.2.description') }}</p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="climbing3" class="d-block w-100" alt="Escalade en voie" />
            <div class="carousel-caption d-none d-md-block">
              <h5>{{ $t('Climbing.Photos.3.title') }}</h5>
              <p>{{ $t('Climbing.Photos.3.description') }}</p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="climbing4" class="d-block w-100" alt="podium" />
            <div class="carousel-caption d-none d-md-block">
              <h5>{{ $t('Climbing.Photos.4.title') }}</h5>
              <p>
                {{ $t('Climbing.Photos.4.description') }}
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div id="palmares" class="my-5">
        <h5 class="my-4 d-flex justify-content-center">
          {{ $t('Climbing.palmares') }}
        </h5>
        <ul class="text-start">
          <li>{{ $t('Climbing.Results.1') }}</li>
          <li>{{ $t('Climbing.Results.2') }}</li>
          <li>{{ $t('Climbing.Results.3') }}</li>
          <li>{{ $t('Climbing.Results.4') }}</li>
        </ul>
      </div>
      <div id="falaise" class="my-5">
        <h5 class="my-4 d-flex justify-content-center">{{ $t('Climbing.Cliff.title') }}</h5>
        <p>
          {{ $t('Climbing.Cliff.description') }}
        </p>
      </div>
      <div id="routesetting" class="my-5">
        <h5 class="text-secondary my-4">
          {{ $t('Climbing.routesetter') }}
          <a href="/about/route-setting" class="text-info"
            ><u>{{ $t('Climbing.this-page') }}</u></a
          >.
        </h5>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Climbing1 from '../../assets/images/climbing/1.jpg'
import Climbing2 from '../../assets/images/climbing/2.jpg'
import Climbing3 from '../../assets/images/climbing/3.jpg'
import Climbing4 from '../../assets/images/climbing/4.jpg'

export default defineComponent({
  name: 'ClimbingPage',
  data() {
    return {
      climbing1: Climbing1,
      climbing2: Climbing2,
      climbing3: Climbing3,
      climbing4: Climbing4
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
.climb-passion {
  background-color: #03224c;
  padding: 20px 0;
  color: white;
}

.climb-container {
  margin: auto;
  padding: 20px;
  max-width: 800px;
}

.climb-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
}

@media (max-width: 768px) {
  .climb-title {
    font-size: 2rem;
  }
}
</style>
