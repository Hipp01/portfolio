<template>
  <div class="climb-passion">
    <div class="climb-container">
      <h1 class="climb-title my-5">Ma passion : l'Escalade</h1>
      <p>
        Après avoir testé plusieurs sports comme le tennis, le basket, le judo, l'athlétisme ou le
        handball, je me suis tourné en 2011 vers l'escalade qui est devenue une passion qui me
        pousse à dépasser mes limites. Que ce soit en salle, sur des blocs, ou en falaise, j'ai
        développé une véritable passion pour cette discipline exigeante qui combine force, agilité,
        souplesse et mental.
      </p>
      <h5 class="my-4">Voici quelques photos de mes réalisations en escalade :</h5>
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
              <h5>Compétition d'escalade en Salle</h5>
              <p>Compétition de bloc à Villeneuve d'Ascq, où j'ai terminé 3e en 2021.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="climbing2" class="d-block w-100" alt="Escalade de vitesse" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Escalade de vitesse</h5>
              <p>Jeux Européens Universitaires 2022, où j'ai terminé 3e en vitesse.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="climbing3" class="d-block w-100" alt="Escalade en voie" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Escalade en Voie</h5>
              <p>Jeux Européens Universitaires 2022, finale de difficulté</p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="climbing4" class="d-block w-100" alt="podium" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Podium jeux européens</h5>
              <p>
                Podium des jeux européens universitaires 2022, l'équipe de Lille devant celle du
                Royaume-Uni et l'Autriche.
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
          Voici quelques-uns de mes palmarès en compétition :
        </h5>
        <ul class="text-start">
          <li>1er aux Jeux Européens Universitaires en équipe en 2022</li>
          <li>3e aux Jeux Européens Universitaires en Vitesse</li>
          <li>Champion Régional en 2020</li>
          <li>Champion Départemental en 2020, 2019, 2018, 2017, 2016, 2015, 2014</li>
        </ul>
      </div>
      <div id="falaise" class="my-5">
        <h5 class="my-4 d-flex justify-content-center">Escalade en falaise :</h5>
        <p>
          J'ai eu l'occasion de grimper sur plusieurs sites naturels en France, en Belgique et en
          Grèce. J'ai fait de magnifiques voies dans le Briançonnais, à St Léger du Ventoux, à
          Fontainebleau, à Freyr en Belgique, à Kalymnos en Grèce, et bien d'autres encore. J'ai
          réussi à atteindre le niveau 8a en falaise.
        </p>
      </div>
      <div id="routesetting" class="my-5">
        <h5 class="text-secondary my-4">
          Je suis aussi ouvreur en compétitions et en salles privées depuis 2018, pour plus
          d'informations, vous pouvez consulter
          <a href="/about/route-setting" class="text-info"><u>cette page</u></a
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
