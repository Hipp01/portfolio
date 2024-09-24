<template>
  <div class="travel-passion">
    <div class="travel-container">
      <h1 class="travel-title my-5">Mes voyages</h1>
      <p>
        Voyager est une façon pour moi de découvrir de nouvelles cultures, d'explorer des paysages
        magnifiques, et de rencontrer des personnes inspirantes. Que ce soit pour un court séjour ou
        une aventure de plusieurs mois, chaque voyage m'apporte une richesse d'expériences qui
        marquent ma vie de manière profonde.
      </p>
      <h5 class="my-4">Voici quelques photos de mes voyages :</h5>
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
              <h5 class="pt-0 mt-0">Voyage à Lodz, Pologne</h5>
              <p class="my-0">Compétition européenne à Lodz en Pologne en 2022.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="bruxelles" class="d-block w-100" alt="Week-end à Bruxelles" />
            <div class="carousel-caption d-none d-md-block py-1">
              <h5 class="pt-0 mt-0">Week-end à Bruxelles</h5>
              <p class="my-0">Découverte de la capitale belge et de ses spécialités culinaires.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="lisbonne" class="d-block w-100" alt="Séjour à Lisbonne, Portugal" />
            <div class="carousel-caption d-none d-md-block py-1">
              <h5 class="pt-0 mt-0">Séjour à Lisbonne, Portugal</h5>
              <p class="my-0">
                Visite des quartiers historiques, des monuments et des spécialités culinaires
                portugaises.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="paris" class="d-block w-100" alt="Week-end à Paris" />
            <div class="carousel-caption d-none d-md-block py-1">
              <h5 class="pt-0 mt-0">Week-end à Paris</h5>
              <p class="my-0">
                Découverte de la capitale française et de ses monuments emblématiques.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="budapest" class="d-block w-100" alt="Séjour à Budapest, Hongrie" />
            <div class="carousel-caption d-none d-md-block py-1">
              <h5 class="pt-0 mt-0">Séjour à Budapest, Hongrie</h5>
              <p class="my-0">
                Exploration des bains thermaux et des ruelles médiévales de la ville.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="stockholm" class="d-block w-100" alt="Séjour à Stockholm, Suède" />
            <div class="carousel-caption d-none d-md-block py-1">
              <h5 class="pt-0 mt-0">Séjour à Stockholm, Suède</h5>
              <p class="my-0">Découverte de la capitale suédoise et de ses musées d'histoire.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="helsinki" class="d-block w-100" alt="Séjour à Helsinki, Finlande" />
            <div class="carousel-caption d-none d-md-block py-1 px-1">
              <h5 class="pt-0 mt-0">Week-end à Helsinki, Finlande</h5>
              <p class="my-0">
                Après avoir passé 2 mois en Finlande pour du bénévolat, il fallait bien visiter la
                capitale et son marché de Noël.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="laponie" class="d-block w-100" alt="Aurores boréales en Laponie" />
            <div class="carousel-caption d-none d-md-block py-1">
              <h5 class="pt-0 mt-0">Aurores boréales en Laponie</h5>
              <p class="my-0">
                Volontariat en Laponie Suédoise, dans une ferme à chiens de traîneau, avec des
                aurores boréales en prime.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="bergen" class="d-block w-100" alt="Week-end à Bergen, Norvège" />
            <div class="carousel-caption d-none d-md-block py-1">
              <h5 class="pt-0 mt-0">Week-end à Bergen, Norvège</h5>
              <p class="my-0">
                Découverte de la ville de Bergen, entourée de fjords et de montagnes.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="copenhague" class="d-block w-100" alt="Week-end à Copenhague, Danemark" />
            <div class="carousel-caption d-none d-md-block py-1">
              <h5 class="pt-0 mt-0">Week-end à Copenhague, Danemark</h5>
              <p class="my-0">Découverte de la capitale danoise, entre canaux et vélos.</p>
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
          Quelques-unes de mes destinations favorites :
        </h5>
        <ul class="text-start">
          <li>
            <a id="stockholm" href="https://fr.wikipedia.org/wiki/Stockholm" target="blank"
              >Stockholm</a
            >, Suède. Une ville magnifique en hiver comme en été, pleine d'histoire et de culture.
            Pour moi la plus belle ville du monde.
          </li>
          <li>
            <a id="sweden" href="https://fr.wikipedia.org/wiki/Su%C3%A8de" target="_blank"
              >La Suède</a
            >, de la Laponie à Malmö. Un pays magnifique, avec des paysages variés et une nature
            préservée. J'y ai vécu pendant 8 mois tout en voyageant pour découvrir la culture, les
            paysages et les traditions.
          </li>
          <li>
            <a
              id="bergen"
              href="https://fr.wikipedia.org/wiki/Bergen_(Norv%C3%A8ge)"
              target="_blank"
              >Bergen</a
            >, Norvège. Une ville dans un Fjörd Norvégien, une source d'air au bord de l'eau,
            entourée de montagnes.
          </li>
          <li>
            <a id="copenhague" href="https://fr.wikipedia.org/wiki/Copenhague" target="_blank"
              >Copenhague</a
            >, Danemark. Une ville pleine de charme, avec ses canaux, ses spécialités culinaires et
            ses vélos.
          </li>
          <li>
            <a id="budapest" href="https://fr.wikipedia.org/wiki/Budapest" target="_blank"
              >Budapest</a
            >, Hongrie. Une ville pleine de charme, avec ses bains thermaux et son architecture
            médiévale.
          </li>
        </ul>
      </div>
      <div id="gap-year" class="my-5">
        <h3 class="my-4 d-flex justify-content-center">Mon année de voyage en 2023 - 2024 :</h3>
        <p class="text-start">
          Après avoir obtenu mon Master en E-Services en 2023, j'ai décidé de prendre mon sac à dos
          et de visiter les pays scandinaves desquels je suis tombé amoureux. <br />
          <br />
          J'ai commencé par la Finlande, le pays le plus heureux du monde. Pendant 2 mois j'ai vécu
          et aidé dans un élevage de malinois, avec des chevaux, poules, lapins, etc. J'ai pu
          découvrir la culture finlandaise, les saunas, les lacs et les forêts du pays de Noël.
        </p>
        <div class="d-flex align-items-center justify-content-center my-2">
          <img :src="finlande1" alt="Finlande" class="img-fluid rounded img-small mx-2" />
          <img :src="finlande2" alt="Finlande" class="img-fluid rounded img-small mx-2" />
          <img :src="finlande3" alt="Finlande" class="img-fluid rounded img-small mx-2" />
        </div>
        <p class="text-start mt-4">
          Ensuite direction la Laponie Suédoise, pour un volontariat dans une ferme à chiens de
          traîneau. Durant la saison hivernale, j'ai pu entraîner les huskies, les nourrir, les
          soigner, et les aimer. J'ai aussi pu découvrir les aurores boréales, les rennes, les lacs
          gelés, et les forêts enneigées. Vivre sous -30°C est une expérience unique et inoubliable.
        </p>
        <div class="d-flex align-items-center justify-content-center my-2">
          <img :src="sweden1" alt="Suède" class="img-fluid rounded img-small mx-2" />
          <img :src="sweden2" alt="Suède" class="img-fluid rounded img-small mx-2" />
          <img :src="sweden3" alt="Suède" class="img-fluid rounded img-small mx-2" />
        </div>
        <p class="text-start mt-4">
          Enfin, je suis allé plus au sud de la Suède pour travailler dans une ferme autosuffisante
          avec des moutons, chevaux, poules, etc. J'ai pu découvrir la culture suédoise, les
          traditions, les paysages, et les spécialités culinaires. J'ai ainsi développé mes
          compétences en travail d'équipe, en autonomie et en organisation.
          <br />
          <br />
          J'ai aussi eu l'occasion de visiter la Norvège et le Danemark où les paysages sont à
          couper le souffle. Entre Fjörds, montagnes, lacs, et mer, j'ai pu découvrir des paysages
          magnifiques et des villes pleines de charme et de vie.
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
