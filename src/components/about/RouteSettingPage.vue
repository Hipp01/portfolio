<template>
  <div class="route-setting-passion">
    <div class="route-setting-container">
      <h1 class="route-setting-title my-5">L'Ouverture en Escalade</h1>
      <p>
        L'ouverture en escalade est une discipline qui demande non seulement des compétences
        techniques, mais aussi une grande créativité. Depuis 2018, j'ai eu l'occasion d'ouvrir des
        voies et blocs en compétition et en salles privées, apportant ma touche personnelle à chaque
        création. C'est une passion qui me pousse à explorer constamment de nouvelles idées pour
        défier et inspirer les grimpeurs.
      </p>
      <h5 class="my-4">Voici quelques photos de mes créations en ouverture :</h5>
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
              <h5 class="">Ouverture Bloc en Compétition</h5>
              <p class="mb-0">
                Pour les championnats départementaux ou régionnaux, nous créons des blocs variés
                pour petits et grands.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="routeSetting2" class="d-block w-100" alt="Ouverture en Club" />
            <div class="carousel-caption d-none d-md-block py-1">
              <h5>Ouverture en Club</h5>
              <p class="mb-0">
                Depuis que je grimpe, j'ai toujours ouvert bénévolement pour mon club, pour le
                plaisir de partager ma passion. Des voies et blocs de tous niveaux.
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
              <h5>Ouverture de Voie en Compétition</h5>
              <p class="mb-0">
                J'ai passé ma formation d'ouvreur en 2018 et depuis j'ouvre régulièrement pour des
                compétitions départementales et régionales.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="routeSetting4" class="d-block w-100" alt="Ouverture en salle privées" />
            <div class="carousel-caption d-none d-md-block py-1">
              <h5>Ouverture de Blocs en salle privée</h5>
              <p class="mb-0">
                J'ai eu l'occasion d'ouvrir pour des salles privées, comme Climb Up, Vertical'Art ou
                Dock79. Des blocs variés de débutant à expert.
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
        <h5 class="my-4 d-flex justify-content-center">Quelques expériences marquantes :</h5>
        <ul class="text-start">
          <li>Ouverture pour le Championnat Régional 2023</li>
          <li>Ouverture en salle privée depuis 2018</li>
          <li>Formation d'ouvreur en 2018</li>
          <li>Ouverture pour le championnat départemental et régional combiné jeunes 2022</li>
        </ul>
      </div>
      <div id="ouverture" class="my-5">
        <h5 class="my-4 d-flex justify-content-center">Ma Philosophie d'Ouverture :</h5>
        <p>
          L'ouverture est pour moi une manière de repousser les limites, non seulement des
          grimpeurs, mais aussi les miennes en tant qu'ouvreur. J'aime créer des voies qui ne sont
          pas simplement des challenges physiques, mais aussi des puzzles mentaux qui obligent le
          grimpeur à réfléchir à chaque mouvement.
        </p>
      </div>
      <div id="contact" class="my-5">
        <h5 class="text-secondary my-4">
          Pour plus d'informations ou pour discuter de projets d'ouverture, vous pouvez me contacter
          directement
          <router-link to="/contact" class="nav-link text-info"
            >ici<span class="text-secondary">.</span></router-link
          >
        </h5>
      </div>
      <div id="climbing" class="my-5">
        <h5 class="text-secondary my-4">
          Je grimpe depuis 2011, pour plus d'informations sur mon parcours en escalade, vous pouvez
          consulter
          <router-link to="/about/climbing" class="nav-link text-warning">cette page</router-link>
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
