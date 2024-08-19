<template>
  <div class="dev-mobile">
    <div class="container">
      <h1 class="title mt-5">Mon développement d'Applications Mobiles</h1>
      <p>
        Depuis 2021 et durant mon Master en E-Services, je suis passionné par le développement
        d'applications mobiles en utilisant diverses technologies telles que
        <a id="react" href="https://reactnative.dev" target="_blank">ReactNative</a>,
        <a id="node" href="https://nodejs.org" target="_blank">Node.js</a>,
        <a id="angular" href="https://angular.dev" target="_blank">Angular</a>,
        <a id="kotlin" href="https://kotlinlang.org" target="_blank">Kotlin</a>, et
        <a id="flutter" href="https://flutter.dev" target="_blank">Flutter</a>.
      </p>
      <h4 class="my-4">Voici quelques projets sur lesquels j'ai travaillé :</h4>

      <div class="project" v-for="(project, index) in projects" :key="index">
        <a :href="project.link">
          <img :src="project.logo" :alt="project.name" class="project-logo" />
          <h5 class="text-center text-info mt-2 mb-0 me-3">{{ project.title }}</h5>
          <p class="project-langage text-center pt-2 mb-0 me-3">#{{ project.langage }}</p>
        </a>
        <div class="project-details">
          <h2 class="projetc-name mb-3">{{ project.name }}</h2>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import bdb from '@/assets/images/bdb.png'
import cryptac from '@/assets/images/cryptac.webp'
import youhunt from '@/assets/images/youhunt.png'
import spacepics from '@/assets/images/spacepics.png'

export default defineComponent({
  name: 'SmartphonePage',
  data() {
    return {
      projects: [
        {
          title: 'Cryptac',
          langage: 'Kotlin',
          name: 'Application de Suivi des Cryptomonnaies',
          description:
            "Cryptac est une application créée avec Kotlin pour suivre les cryptomonnaies. Cette application permet aux utilisateurs de consulter les prix des cryptomonnaies, les pourcentages d'évolution, ainsi que des descriptions détaillées. Les utilisateurs peuvent également ajouter leurs cryptomonnaies favorites à une liste de suivi pour un accès plus facile.",
          logo: cryptac,
          link: 'https://play.google.com/store/apps/details?id=fr.iamludal.cryptac'
        },
        {
          title: 'SpacePics',
          langage: 'Flutter',
          name: "Application d'Images de l'Espace",
          description:
            "SpacePics a été développé avec Flutter, il s'agit  d'une application qui affiche quotidiennement des images de la NASA, accompagnées de descriptions. L'application comprend une fonctionnalité de traduction en français, rendant les informations accessibles à un plus large public.",
          logo: spacepics,
          link: 'https://github.com/Hipp01/space-pic#space-pics'
        },
        {
          title: "Bou'D'Brousse",
          langage: 'ReactNative #Node.js',
          name: "Application de Gestion pour un Club d'Escalade (ReactNative et Node.js)",
          description:
            "Mon premier projet majeur était une application pour mon club d'escalade. Cette application gère les adhérents du club et leur permet de valider leurs entrées en fonction de leurs créneaux horaires autorisés. L'application a été développée avec ReactNative, et l'API avec Node.js, offrant une expérience utilisateur fluide sur Android et iOS.",
          logo: bdb,
          link: 'https://github.com/Bou-D-Brousse'
        },
        {
          title: 'YouHunt',
          langage: 'Angular',
          name: 'Application de Chasse au Trésor en Réalité (Angular)',
          description:
            "Pour mon projet de fin de Master, j'ai créé une application qui permet de concevoir et de participer à des chasses au trésor dans la vie réelle. Chaque lieu atteint est associé à des questions, un système de points, et d'autres fonctionnalités engageantes, rendant l'expérience interactive et amusante.",
          logo: youhunt,
          link: 'https://github.com/orgs/YouHunt-Project/repositories'
        }
      ]
    }
  }
})
</script>

<style scoped>
.dev-mobile {
  background-color: #03224c;
  padding: 20px 0;
  color: white;
}

.container {
  margin: auto;
  padding: 20px;
  max-width: 800px;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
}

p a {
  color: #fff;
  text-decoration: none;
  text-decoration: underline;
}
#react:hover {
  color: #61dafb;
}
#node:hover {
  color: #68a063;
}
#angular:hover {
  color: #d6002f;
}
#kotlin:hover {
  color: #a42be5;
}
#flutter:hover {
  color: #1db5f5;
}

a {
  color: #fff;
  text-decoration: none;
}

.project {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  background-color: #0a3a71;
  padding: 15px;
  border-radius: 8px;
}

project a {
  padding: 10px;
}

.project-logo {
  width: 100px;
  height: 100px;
  margin-right: 20px;
  border-radius: 8px;
}
.project-logo:hover {
  transform: scale(1.1);
}

.project-details {
  flex-grow: 1;
}

.projetc-name {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: #61dafb;
}

.project h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.project p {
  font-size: 1.1rem;
  line-height: 1.5;
  text-align: left;
}

.project-langage {
  font-size: 1.1rem;
  color: aquamarine;
}
</style>
