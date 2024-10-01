<template>
  <div class="dev">
    <div class="container">
      <h1 class="title my-5">{{ $t('Projects.title') }}</h1>
      <p>
        {{ $t('Projects.description') }}
        <a id="python" href="https://www.python.org" target="_blank">Python</a>,
        <a
          id="javascript"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          >JavaScript</a
        >, ou <a id="kotlin" href="https://kotlinlang.org" target="_blank">Kotlin</a>.
      </p>
      <h4 class="my-4">{{ $t('Projects.projects-did') }}</h4>

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
          {{ $t('Projects.projects-more') }}
          <a href="/about/mobile" class="text-info"
            ><u>{{ $t('Projects.this-page') }}</u></a
          >.
        </h5>
      </div>
      <div class="container py-5">
        <h4 class="text-center mb-4">{{ $t('Projects.list-languages') }} :</h4>
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
import { defineComponent, ref, watch } from 'vue'
import LanguageCard from './LanguageCard.vue'
import { useI18n } from 'vue-i18n'

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
  setup() {
    const { t, locale } = useI18n()

    const getProjects = () => [
      {
        title: t('Projects.Projects.MMS.title'),
        langage: 'Flask #React.js',
        name: t('Projects.Projects.MMS.name'),
        description: t('Projects.Projects.MMS.description'),
        logo: MakeMySledge,
        link: 'https://make-my-sledge.web.app'
      },
      {
        title: t('Projects.Projects.Memoire.title'),
        langage: 'LaTex',
        name: t('Projects.Projects.Memoire.name'),
        description: t('Projects.Projects.Memoire.description'),
        logo: DarkPatterns,
        link: 'https://drive.google.com/file/d/1au23CZIKtarVc0ihUrF9bREZKCT2iRyd/view?usp=sharing'
      },
      {
        title: t('Projects.Projects.SlidesMap.title'),
        langage: 'ReactNative',
        name: t('Projects.Projects.SlidesMap.name'),
        description: t('Projects.Projects.SlidesMap.description'),
        logo: SlidesMap,
        link: 'https://github.com/Hipp01/slides-map'
      },
      {
        title: t('Projects.Projects.Volunteering.title'),
        langage: 'Vue.js',
        name: t('Projects.Projects.Volunteering.name'),
        description: t('Projects.Projects.Volunteering.description'),
        logo: Backsjon,
        link: 'https://github.com/Hipp01/volunteering-farm-backsjon'
      },
      {
        title: t('Projects.Projects.BubbleCursor.title'),
        langage: 'Python',
        name: t('Projects.Projects.BubbleCursor.name'),
        description: t('Projects.Projects.BubbleCursor.description'),
        logo: BubbleCursor,
        link: 'https://github.com/Hipp01/Bubble-cursor'
      },
      {
        title: t('Projects.Projects.AoC.title'),
        langage: 'Python',
        name: t('Projects.Projects.AoC.name'),
        description: t('Projects.Projects.AoC.description'),
        logo: AoC,
        link: 'https://github.com/Hipp01/AoC'
      },
      {
        title: t('Projects.Projects.Flower.title'),
        langage: 'Python',
        name: t('Projects.Projects.Flower.name'),
        description: t('Projects.Projects.Flower.description'),
        logo: Flower,
        link: 'https://github.com/Hipp01/Consommation_Flower'
      },
      {
        title: t('Projects.Projects.Discord.title'),
        langage: 'Python',
        name: t('Projects.Projects.Discord.name'),
        description: t('Projects.Projects.Discord.description'),
        logo: Bot,
        link: 'https://github.com/Hipp01/bot-discord'
      }
    ]
    const projects = ref(getProjects())

    watch(locale, () => {
      projects.value = getProjects()
    })

    return {
      projects
    }
  },
  data() {
    return {
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
