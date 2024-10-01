<template>
  <div class="dev-mobile">
    <div class="container">
      <h1 class="title my-5">{{ $t('Mobile.title') }}</h1>
      <p>
        {{ $t('Mobile.description') }}
        <a id="react" href="https://reactnative.dev" target="_blank">ReactNative</a>,
        <a id="node" href="https://nodejs.org" target="_blank">Node.js</a>,
        <a id="angular" href="https://angular.dev" target="_blank">Angular</a>,
        <a id="kotlin" href="https://kotlinlang.org" target="_blank">Kotlin</a>, et
        <a id="flutter" href="https://flutter.dev" target="_blank">Flutter</a>.
      </p>
      <h4 class="my-4">{{ $t('Mobile.projects-did') }}</h4>

      <div class="project" v-for="(project, index) in projects" :key="index">
        <div class="row flex-md-row flex-column px-2">
          <div class="col-md-2 col-12 mt-2 align-content-center text-md-center text-start">
            <a :href="project.link" class="d-flex flex-md-column align-items-center">
              <img :src="project.logo" :alt="project.name" class="project-logo me-md-0 me-3" />
              <div class="d-flex flex-column align-items-start ms-md-0 ms-3 mt-md-2">
                <h5 class="text-info mb-0">{{ project.title }}</h5>
                <p class="project-langage mb-0">#{{ project.langage }}</p>
              </div>
            </a>
          </div>
          <div class="col-md-10 col-12">
            <div class="project-details">
              <h2 class="projetc-name mb-3">{{ project.name }}</h2>
              <p>{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h5 class="text-secondary my-4">
          {{ $t('Mobile.projects-more') }}
          <a href="/about/code" class="text-info">
            <u>{{ $t('Mobile.this-page') }}</u> </a
          >.
        </h5>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import bdb from '@/assets/images/bdb.png'
import cryptac from '@/assets/images/cryptac.webp'
import youhunt from '@/assets/images/youhunt.png'
import spacepics from '@/assets/images/spacepics.png'

export default defineComponent({
  name: 'SmartphonePage',
  setup() {
    const { t, locale } = useI18n()

    const getProjects = () => [
      {
        title: 'Cryptac',
        langage: 'Kotlin',
        name: t('Mobile.Projects.Cryptac.name'),
        description: t('Mobile.Projects.Cryptac.description'),
        logo: cryptac,
        link: 'https://play.google.com/store/apps/details?id=fr.iamludal.cryptac'
      },
      {
        title: 'SpacePics',
        langage: 'Flutter',
        name: t('Mobile.Projects.SpacePics.name'),
        description: t('Mobile.Projects.SpacePics.description'),
        logo: spacepics,
        link: 'https://github.com/Hipp01/space-pic#space-pics'
      },
      {
        title: "Bou'D'Brousse",
        langage: 'ReactNative #Node.js',
        name: t('Mobile.Projects.BDB.name'),
        description: t('Mobile.Projects.BDB.description'),
        logo: bdb,
        link: 'https://github.com/Bou-D-Brousse'
      },
      {
        title: 'YouHunt',
        langage: 'Angular',
        name: t('Mobile.Projects.YouHunt.name'),
        description: t('Mobile.Projects.YouHunt.description'),
        logo: youhunt,
        link: 'https://github.com/orgs/YouHunt-Project/repositories'
      }
    ]

    const projects = ref(getProjects())

    watch(locale, () => {
      projects.value = getProjects()
    })

    return {
      projects
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
