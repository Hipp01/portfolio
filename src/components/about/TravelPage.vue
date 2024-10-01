<template>
  <div class="travel-passion">
    <div class="travel-container">
      <h1 class="travel-title my-5">{{ $t('Travel.title') }}</h1>
      <p>
        {{ $t('Travel.description') }}
      </p>
      <h5 class="my-4">{{ $t('Travel.photosTitle') }}</h5>
      <div id="carouselTravel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators mb-0">
          <button
            type="button"
            data-bs-target="#carouselTravel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselTravel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselTravel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselTravel"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselTravel"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselTravel"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselTravel"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselTravel"
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselTravel"
            data-bs-slide-to="8"
            aria-label="Slide 9"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselTravel"
            data-bs-slide-to="9"
            aria-label="Slide 10"
          ></button>
        </div>
        <div class="carousel-inner rounded">
          <div class="carousel-item active">
            <img :src="lodz" class="d-block w-100" alt="Voyage à Lodz, Pologne" />
            <div class="carousel-caption d-none d-md-block py-1">
              <h5 class="pt-0 mt-0">{{ $t('Travel.Carousel.1.title') }}</h5>
              <p class="my-0">{{ $t('Travel.Carousel.1.description') }}</p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="bruxelles" class="d-block w-100" alt="Week-end à Bruxelles" />
            <div class="carousel-caption d-none d-md-block py-1">
              <h5 class="pt-0 mt-0">{{ $t('Travel.Carousel.2.title') }}</h5>
              <p class="my-0">{{ $t('Travel.Carousel.2.description') }}</p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="lisbonne" class="d-block w-100" alt="Séjour à Lisbonne, Portugal" />
            <div class="carousel-caption d-none d-md-block py-1">
              <h5 class="pt-0 mt-0">{{ $t('Travel.Carousel.3.title') }}</h5>
              <p class="my-0">
                {{ $t('Travel.Carousel.3.description') }}
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="paris" class="d-block w-100" alt="Week-end à Paris" />
            <div class="carousel-caption d-none d-md-block py-1">
              <h5 class="pt-0 mt-0">{{ $t('Travel.Carousel.4.title') }}</h5>
              <p class="my-0">
                {{ $t('Travel.Carousel.4.description') }}
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="budapest" class="d-block w-100" alt="Séjour à Budapest, Hongrie" />
            <div class="carousel-caption d-none d-md-block py-1">
              <h5 class="pt-0 mt-0">{{ $t('Travel.Carousel.5.title') }}</h5>
              <p class="my-0">
                {{ $t('Travel.Carousel.5.description') }}
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="stockholm" class="d-block w-100" alt="Séjour à Stockholm, Suède" />
            <div class="carousel-caption d-none d-md-block py-1">
              <h5 class="pt-0 mt-0">{{ $t('Travel.Carousel.6.title') }}</h5>
              <p class="my-0">
                {{ $t('Travel.Carousel.6.description') }}
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="helsinki" class="d-block w-100" alt="Séjour à Helsinki, Finlande" />
            <div class="carousel-caption d-none d-md-block py-1 px-1">
              <h5 class="pt-0 mt-0">{{ $t('Travel.Carousel.7.title') }}</h5>
              <p class="my-0">
                {{ $t('Travel.Carousel.7.description') }}
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="laponie" class="d-block w-100" alt="Aurores boréales en Laponie" />
            <div class="carousel-caption d-none d-md-block py-1">
              <h5 class="pt-0 mt-0">{{ $t('Travel.Carousel.8.title') }}</h5>
              <p class="my-0">
                {{ $t('Travel.Carousel.8.description') }}
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="bergen" class="d-block w-100" alt="Week-end à Bergen, Norvège" />
            <div class="carousel-caption d-none d-md-block py-1">
              <h5 class="pt-0 mt-0">{{ $t('Travel.Carousel.9.title') }}</h5>
              <p class="my-0">
                {{ $t('Travel.Carousel.9.description') }}
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="copenhague" class="d-block w-100" alt="Week-end à Copenhague, Danemark" />
            <div class="carousel-caption d-none d-md-block py-1">
              <h5 class="pt-0 mt-0">{{ $t('Travel.Carousel.10.title') }}</h5>
              <p class="my-0">
                {{ $t('Travel.Carousel.10.description') }}
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselTravel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselTravel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div id="destinations" class="my-5">
        <h5 class="my-4 d-flex justify-content-center">
          {{ $t('Travel.destinationsTitle') }}
        </h5>
        <ul class="text-start">
          <li>
            <a id="stockholm" href="https://fr.wikipedia.org/wiki/Stockholm" target="blank">{{
              $t('Travel.Destinations.1.name')
            }}</a
            >, {{ $t('Travel.Destinations.1.description') }}
          </li>
          <li>
            <a id="sweden" href="https://fr.wikipedia.org/wiki/Su%C3%A8de" target="_blank">{{
              $t('Travel.Destinations.2.name')
            }}</a
            >, {{ $t('Travel.Destinations.2.description') }}
          </li>
          <li>
            <a
              id="bergen"
              href="https://fr.wikipedia.org/wiki/Bergen_(Norv%C3%A8ge)"
              target="_blank"
              >{{ $t('Travel.Destinations.3.name') }}</a
            >, {{ $t('Travel.Destinations.3.description') }}
          </li>
          <li>
            <a id="copenhague" href="https://fr.wikipedia.org/wiki/Copenhague" target="_blank">{{
              $t('Travel.Destinations.4.name')
            }}</a
            >, {{ $t('Travel.Destinations.4.description') }}
          </li>
          <li>
            <a id="budapest" href="https://fr.wikipedia.org/wiki/Budapest" target="_blank">{{
              $t('Travel.Destinations.5.name')
            }}</a
            >, {{ $t('Travel.Destinations.5.description') }}
          </li>
        </ul>
      </div>
      <div id="gap-year" class="my-5">
        <h3 class="my-4 d-flex justify-content-center">{{ $t('Travel.gapYearTitle') }}</h3>
        <p class="text-start">
          {{ $t('Travel.gapYearIntroduction') }}
          <br />
          <br />
          {{ $t('Travel.GapYearDetails.finland') }}
        </p>
        <div class="d-flex align-items-center justify-content-center my-2">
          <img :src="finlande1" alt="Finlande" class="img-fluid rounded img-small mx-2" />
          <img :src="finlande2" alt="Finlande" class="img-fluid rounded img-small mx-2" />
          <img :src="finlande3" alt="Finlande" class="img-fluid rounded img-small mx-2" />
        </div>
        <p class="text-start mt-4">
          {{ $t('Travel.GapYearDetails.swedenLapland') }}
        </p>
        <div class="d-flex align-items-center justify-content-center my-2">
          <img :src="sweden1" alt="Suède" class="img-fluid rounded img-small mx-2" />
          <img :src="sweden2" alt="Suède" class="img-fluid rounded img-small mx-2" />
          <img :src="sweden3" alt="Suède" class="img-fluid rounded img-small mx-2" />
        </div>
        <p class="text-start mt-4">
          {{ $t('Travel.GapYearDetails.southSweden') }}
          <br />
          <br />
          {{ $t('Travel.GapYearDetails.norwayDenmark') }}
        </p>
        <div class="div-images p-2 rounded">
          <div class="d-flex align-items-center justify-content-center mt-2 pb-1">
            <img :src="travel1" alt="midsummer" class="img-fixed mx-2 rounded" />
            <img :src="travel2" alt="ice" class="img-fixed mx-2 rounded" />
            <img :src="travel3" alt="aurore boréale" class="img-fixed mx-2 rounded" />
          </div>
          <div class="d-flex align-items-center justify-content-center mt-2">
            <img :src="travel4" alt="lamb" class="img-fixed mx-2 rounded" />
            <img :src="travel5" alt="bergen" class="img-fixed mx-2 rounded" />
            <img :src="travel6" alt="tivoli" class="img-fixed mx-2 rounded" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Lodz from '../../assets/images/travel/Lodz.jpg'
import Bruxelles from '../../assets/images/travel/Bruxelles.jpg'
import Lisbonne from '../../assets/images/travel/Lisbonne.jpg'
import Paris from '../../assets/images/travel/Paris.jpg'
import Budapest from '../../assets/images/travel/Budapest.jpg'
import Stockholm from '../../assets/images/travel/Stockholm.jpg'
import Helsinki from '../../assets/images/travel/Helsinki.jpg'
import Laponie from '../../assets/images/travel/Laponie.jpg'
import Bergen from '../../assets/images/travel/Bergen.jpg'
import Copenhague from '../../assets/images/travel/copenhague.jpg'
import Finlande1 from '../../assets/images/travel/finlande1.jpeg'
import Finlande2 from '../../assets/images/travel/finlande2.jpeg'
import Finlande3 from '../../assets/images/travel/finlande3.jpeg'
import Sweden1 from '../../assets/images/travel/sweden1.jpeg'
import Sweden2 from '../../assets/images/travel/sweden2.jpeg'
import Sweden3 from '../../assets/images/travel/sweden3.jpeg'
import Travel1 from '../../assets/images/travel/travel1.jpg'
import Travel2 from '../../assets/images/travel/travel2.jpeg'
import Travel3 from '../../assets/images/travel/travel3.jpeg'
import Travel4 from '../../assets/images/travel/travel4.jpeg'
import Travel5 from '../../assets/images/travel/travel5.jpeg'
import Travel6 from '../../assets/images/travel/travel6.jpeg'

export default defineComponent({
  name: 'TravelPage',
  data() {
    return {
      lodz: Lodz,
      bruxelles: Bruxelles,
      lisbonne: Lisbonne,
      paris: Paris,
      budapest: Budapest,
      stockholm: Stockholm,
      helsinki: Helsinki,
      laponie: Laponie,
      bergen: Bergen,
      copenhague: Copenhague,
      finlande1: Finlande1,
      finlande2: Finlande2,
      finlande3: Finlande3,
      sweden1: Sweden1,
      sweden2: Sweden2,
      sweden3: Sweden3,
      travel1: Travel1,
      travel2: Travel2,
      travel3: Travel3,
      travel4: Travel4,
      travel5: Travel5,
      travel6: Travel6
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
.carousel-inner .carousel-item {
  transition: -webkit-transform 2s ease;
  transition: transform 2s ease;
}

.travel-passion {
  background-color: #03224c;
  padding: 20px 0;
  color: white;
}

.travel-container {
  margin: auto;
  padding: 20px;
  max-width: 800px;
}

.travel-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
}

#stockholm {
  color: #0067a2;
}
#sweden {
  color: #fecc00;
}
#bergen {
  color: #c9072a;
}
#copenhague {
  color: #e51f20;
}
#budapest {
  color: #41704c;
}

.img-small {
  max-width: 30%;
  height: auto;
}

.img-fixed {
  width: 250px;
  height: 250px;
  object-fit: cover;
}

.div-images {
  background-color: #0a3a71;
}

@media (max-width: 768px) {
  .travel-title {
    font-size: 2rem;
  }
  .img-fixed {
    width: 100px;
    height: 100px;
  }
}
</style>
