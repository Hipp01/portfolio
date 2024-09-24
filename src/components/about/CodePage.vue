<template>
  <div class="dev">
    <div class="container">
      <h1 class="title my-5">Mon Parcours dans la Programmation</h1>
      <p>
        Depuis que j'ai commencé mon parcours dans la programmation, j'ai exploré diverses
        technologies et langages de programmation tels que
        <a id="python" href="https://www.python.org" target="_blank">Python</a>,
        <a
          id="javascript"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          >JavaScript</a
        >, ou <a id="kotlin" href="https://kotlinlang.org" target="_blank">Kotlin</a>.
      </p>
      <h4 class="my-4">Voici quelques projets sur lesquels j'ai travaillé :</h4>

      <div class="project" v-for="(project, index) in projects" :key="index">
        <div class="row flex-md-row flex-column px-2">
          <div class="col-md-2 col-12 mt-2 align-content-center text-md-center text-start ps-0">
            <a
              :href="project.link"
              target="_blank"
              class="d-flex flex-md-column align-items-center"
            >
              <img :src="project.logo" :alt="project.name" class="project-logo me-md-0 me-3" />
              <div class="d-flex flex-column align-items-start ms-md-0 ms-3 mt-md-2">
                <h5 class="mb-2 project-title">
                  <strong>{{ project.title }}</strong>
                </h5>
                <p class="project-langage mb-0">#{{ project.langage }}</p>
              </div>
            </a>
          </div>
          <div class="col-md-10 col-12">
            <div class="project-details">
              <h2 class="projetc-name mb-3">{{ project.name }}</h2>
              <p v-html="project.description"></p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h5 class="text-secondary my-4">
          Pour consulter mes autres projets, dans le développement mobile, vous pouvez regarder
          <a href="/about/mobile" class="text-info"><u>cette page</u></a
          >.
        </h5>
      </div>
      <div class="container py-5">
        <h4 class="text-center mb-4">
          Voici une liste de langages et technologies supplémentaires que j'ai appris durant mon
          cursus :
        </h4>
        <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4">
          <LanguageCard
            v-for="(langage, index) in langages"
            :key="index"
            :id="langage.id"
            :image="langage.image"
            :title="langage.title"
            :link="langage.link"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LanguageCard from './LanguageCard.vue'

import MakeMySledge from '@/assets/images/makemysledge.png'
import SlidesMap from '@/assets/images/slides-map.png'
import Backsjon from '@/assets/images/backsjon.png'
import BubbleCursor from '@/assets/images/bubble-cursor.gif'
import AoC from '@/assets/images/aoc.jpg'
import DarkPatterns from '@/assets/images/dark-pattern.png'
import Flower from '@/assets/images/flower.avif'
import Bot from '@/assets/images/bot.png'
import PythonImage from '@/assets/images/logos/python.png'
import DjangoImage from '@/assets/images/logos/django.png'
import FlaskImage from '@/assets/images/logos/flask.png'
import HTMLCSSJSImage from '@/assets/images/logos/html-css-js.png'
import VueImage from '@/assets/images/logos/vue.png'
import ReactImage from '@/assets/images/logos/react.png'
import ReactNativeImage from '@/assets/images/logos/react-native.png'
import AngularImage from '@/assets/images/logos/angular.png'
import CImage from '@/assets/images/logos/c.png'
import CoqImage from '@/assets/images/logos/coq.png'
import FlutterImage from '@/assets/images/logos/flutter.png'
import GitHubImage from '@/assets/images/logos/github.png'
import GitLabImage from '@/assets/images/logos/gitlab.png'
import HaskellImage from '@/assets/images/logos/haskell.png'
import JavaImage from '@/assets/images/logos/java.png'
import KotlinImage from '@/assets/images/logos/kotlin.png'
import PHPImage from '@/assets/images/logos/php.png'
import RImage from '@/assets/images/logos/r.png'
import SQLImage from '@/assets/images/logos/sql.png'
import TypeScriptImage from '@/assets/images/logos/typescript.png'
import NodeImage from '@/assets/images/logos/node.png'
import Bootstrap from '@/assets/images/logos/bootstrap.png'
import DockerImage from '@/assets/images/logos/docker.png'
import LinuxImage from '@/assets/images/logos/linux.png'

export default defineComponent({
  name: 'CodePage',
  components: {
    LanguageCard
  },
  data() {
    return {
      projects: [
        {
          title: 'Make my sledge',
          langage: 'Flask #React.js',
          name: 'Application web de gestion de chiens de traineau',
          description:
            "Durant mon année de césure (2023-2024) en Laponie Suédoise, j'ai développé une application web pour gérer les chiens et les traineaux de l'élevage. <br/> Avec cette application les utilisateurs peuvent avoir des informations sur les chiens, en ajouter, les modifier et les supprimer. Ils peuvent aussi créer différents traineaux en fonction de leurs poids, aisance avec les chiens et leurs envie de vitesse. Les traineaux sont créés de façon à ce que les chiens qui ne s'entendent pas ne soient pas ensemble.",
          logo: MakeMySledge,
          link: 'https://make-my-sledge.web.app'
        },
        {
          title: 'Mémoire de Master',
          langage: 'LaTex',
          name: "L'influence des Dark Patterns sur les utilisateurs",
          description:
            "Pour mon mémoire de Master, j'ai étudié l'influence des Dark Patterns sur les utilisateurs. <br/> Les Dark Patterns sont des techniques de conception qui poussent les utilisateurs à prendre des décisions qu'ils n'auraient pas prises autrement. J'ai étudié l'impact de ces techniques sur les utilisateurs, leur perception et leur confiance envers les sites web.",
          logo: DarkPatterns,
          link: 'https://drive.google.com/file/d/1au23CZIKtarVc0ihUrF9bREZKCT2iRyd/view?usp=sharing'
        },
        {
          title: 'Slides Map',
          langage: 'ReactNative',
          name: 'Application mobile de Toboggans',
          description:
            "J'ai créé une application mobile pour trouver les toboggans les plus proches de chez soi. <br/> Cette application permet aux utilisateurs de trouver les toboggans autour d'eux, de voir leurs niveaux d'amusement, de les noter et de les commenter. Ils peuvent aussi ajouter de nouveaux toboggans et les partager avec la communauté. <br/> Cette application n'est pas en ligne car elle est encore en développement.",
          logo: SlidesMap,
          link: 'https://github.com/Hipp01/slides-map'
        },
        {
          title: 'Site de Volontariat',
          langage: 'Vue.js',
          name: 'Volntariat Ferme Backsjon',
          description:
            "Pour recruter de nouveaux volontaires dans la ferme Backsjön au nord de la Suède, j'ai créé un site web en m'appuyant sur Vue.js. <br/> Ce site permet aux utilisateurs de découvrir la ferme, les activités proposées, les animaux et les valeurs de la ferme. Ils peuvent aussi s'inscrire pour devenir volontaire en fonction des dates voulues et des places disponibles, et participer à la vie de la ferme. <br/> Ce site n'est pas en ligne pour cause de malentendu avec les propriétaires",
          logo: Backsjon,
          link: 'https://github.com/Hipp01/volunteering-farm-backsjon'
        },
        {
          title: 'Bubble Cursor',
          langage: 'Python',
          name: 'Expérience Interface Interactions Homme-Machine',
          description:
            "Dans le cadre de mon Master, j'ai développé une expérience d'interface homme-machine pour étudier l'inmpact de la forme et la taille de différents curseurs de pointage sur la vitesse et la précision des utilisateurs. <br/> Cette expérience a été développée en Python avec la librairie PyQt5 et a été testée sur plusieurs participants. Le but était de voir si un curseur différent pouvait améliorer la vitesse et la précision des utilisateurs, sur différentes tailles de cibles.",
          logo: BubbleCursor,
          link: 'https://github.com/Hipp01/Bubble-cursor'
        },
        {
          title: 'Advent of Code',
          langage: 'Python',
          name: "Calendrier de l'avent du code",
          description:
            'Chaque année, je participe à l\'évènement "Advent of Code" qui consiste à résoudre des problèmes de programmation chaque jour du mois de décembre. <br/> Cela me permet de découvrir de nouveaux problèmes, de nouvelles façons de coder et de m\'améliorer en programmation. <br/> Vous pouvez retrouver mes solutions sur mon <a href=https://github.com/Hipp01/AoC" target="_blank" class=\'text-white\'">GitHub</a>.',
          logo: AoC,
          link: 'https://github.com/Hipp01/AoC'
        },
        {
          title: 'Mesure électrique Flower',
          langage: 'Python',
          name: 'Analyse de la consommation électrique de la bibliothèque Flower',
          description:
            "Dans le cadre de mon Master, j'ai réalisé une étude sur la consommation électrique de la bibliothèque d'apprentissage fédéré Flower. <br/> J'ai analysé les données de consommation électrique de la bibliothèque pour comprendre les habitudes des utilisateurs, les périodes de pointe et les périodes creuses. J'ai ensuite proposé des solutions pour réduire la consommation électrique et améliorer l'efficacité énergétique de la bibliothèque.",
          logo: Flower,
          link: 'https://github.com/Hipp01/Consommation_Flower'
        },
        {
          title: 'Bot Discord',
          langage: 'Python',
          name: 'Bot Discord pour des jeux interactifs',
          description:
            "J'ai créé un Bot Discord qui permet de jouer seul ou à plusieurs à des jeux interactifs. <br/> Ce Bot propose différents jeux comme la bateille navale, le pendu, le morpion, le devine le nombre... Les utilisateurs peuvent jouer entre eux ou contre le Bot, et gagner des points en fonction de leurs performances.",
          logo: Bot,
          link: 'https://github.com/Hipp01/bot-discord'
        }
      ],
      langages: [
        { id: 'vuejs', image: VueImage, title: 'Vue JS', link: 'https://vuejs.org/' },
        { id: 'react', image: ReactImage, title: 'React', link: 'https://reactjs.org/' },
        { id: 'node', image: NodeImage, title: 'Node', link: 'https://nodejs.org/' },
        {
          id: 'typescript',
          image: TypeScriptImage,
          title: 'TypeScript',
          link: 'https://www.typescriptlang.org/'
        },

        { id: 'angular', image: AngularImage, title: 'Angular', link: 'https://angular.io/' },
        {
          id: 'react-native',
          image: ReactNativeImage,
          title: 'React Native',
          link: 'https://reactnative.dev/'
        },
        { id: 'kotlin', image: KotlinImage, title: 'Kotlin', link: 'https://kotlinlang.org' },
        { id: 'flutter', image: FlutterImage, title: 'Flutter', link: 'https://flutter.dev/' },
        { id: 'php', image: PHPImage, title: 'PHP', link: 'https://www.php.net/' },
        { id: 'python', image: PythonImage, title: 'Python', link: 'https://www.python.org' },
        {
          id: 'django',
          image: DjangoImage,
          title: 'Django',
          link: 'https://www.djangoproject.com/'
        },
        {
          id: 'flask',
          image: FlaskImage,
          title: 'Flask',
          link: 'https://flask.palletsprojects.com/'
        },
        {
          id: 'docker',
          image: DockerImage,
          title: 'Docker',
          link: 'https://www.docker.com/'
        },
        { id: 'github', image: GitHubImage, title: 'GitHub', link: 'https://github.com/' },
        { id: 'gitlab', image: GitLabImage, title: 'GitLab', link: 'https://about.gitlab.com/' },
        { id: 'sql', image: SQLImage, title: 'SQL', link: 'https://en.wikipedia.org/wiki/SQL' },
        {
          id: 'html-css-js',
          image: HTMLCSSJSImage,
          title: 'HTML + CSS + JS',
          link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
        },
        {
          id: 'bootstrap',
          image: Bootstrap,
          title: 'Bootstrap',
          link: 'https://getbootstrap.com/'
        },
        { id: 'linux', image: LinuxImage, title: 'Linux', link: 'https://www.linux.org/' },
        {
          id: 'c',
          image: CImage,
          title: 'C',
          link: 'https://en.wikipedia.org/wiki/C_(programming_language)'
        },
        { id: 'coq', image: CoqImage, title: 'Coq', link: 'https://coq.inria.fr/' },

        { id: 'haskell', image: HaskellImage, title: 'Haskell', link: 'https://www.haskell.org/' },
        { id: 'r', image: RImage, title: 'R', link: 'https://www.r-project.org/' },
        { id: 'java', image: JavaImage, title: 'Java', link: 'https://www.java.com/' }
      ]
    }
  }
})
</script>

<style scoped>
.dev {
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
#python:hover {
  color: #306998;
}
#javascript:hover {
  color: #f0db4f;
}
#kotlin:hover {
  color: #7f52ff;
}
#html-css:hover {
  color: #e34c26;
}
#php:hover {
  color: #8892be;
}
#java:hover {
  color: #5382a1;
}
#SQL:hover {
  color: #f29111;
}
#c:hover {
  color: #a8b9cc;
}
#haskell:hover {
  color: #5e5086;
}
#r:hover {
  color: #276dc3;
}
#coq:hover {
  color: #3d9bbf;
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

.project a {
  padding: 10px;
}

.project-title {
  font-size: 1.25rem;
  color: #e0e0e0;
  text-align: start;
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
  color: #61dafb;
}

#langages {
  display: flex;
  align-items: center;
  background-color: #0a3a71;
  padding: 15px;
  border-radius: 8px;
  padding-left: 20%;
}

#langages ul {
  padding: 0;
  padding-left: 10px;
  text-align: left;
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }
  .project {
    flex-direction: column;
  }

  .project-logo {
    margin-right: 0;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 80px;
    height: 80px;
  }
}
</style>
