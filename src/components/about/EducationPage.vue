<template>
  <div class="education-page">
    <div class="education-container">
      <h1 class="education-title my-5">{{ $t('Education.title') }}</h1>
      <p>
        {{ $t('Education.description') }}
      </p>
      <h3 class="my-4">Matières enseignées :</h3>
      <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-2 g-md-4">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <img
                src="../../assets/images/education/informatique.png"
                alt="Informatique"
                class="card-img-top img-fluid"
              />
              <h5 class="card-title mt-3">{{ $t('Education.Subjects.computer') }}</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <img
                src="../../assets/images/education/mathematics.png"
                alt="Mathématiques"
                class="card-img-top img-fluid"
              />
              <h5 class="card-title mt-3">{{ $t('Education.Subjects.mathematics') }}</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <img
                src="../../assets/images/education/electronique.png"
                alt="Electronique"
                class="card-img-top img-fluid"
              />
              <h5 class="card-title mt-3">{{ $t('Education.Subjects.electronics') }}</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <img
                src="../../assets/images/education/physics.png"
                alt="Physique"
                class="card-img-top img-fluid"
              />
              <h5 class="card-title mt-3">{{ $t('Education.Subjects.physics') }}</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <img
                src="../../assets/images/education/mechanic.png"
                alt="Mécanique"
                class="card-img-top img-fluid"
              />
              <h5 class="card-title mt-3">{{ $t('Education.Subjects.mechanics') }}</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <img
                src="../../assets/images/education/chimie.png"
                alt="Chimie"
                class="card-img-top img-fluid"
              />
              <h5 class="card-title mt-3">{{ $t('Education.Subjects.chemistry') }}</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <img
                src="../../assets/images/education/SI.png"
                alt="Sciences de l'ingénieur"
                class="card-img-top img-fluid"
              />
              <h5 class="card-title mt-3">{{ $t('Education.Subjects.engineering') }}</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <img
                src="../../assets/images/education/algo.png"
                alt="Algorithmie"
                class="card-img-top img-fluid"
              />
              <h5 class="card-title mt-3">{{ $t('Education.Subjects.algorithm') }}</h5>
            </div>
          </div>
        </div>
      </div>
      <h3 class="my-4">{{ $t('Education.levelsTitle') }}</h3>
      <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <img
                src="../../assets/images/education/primaire.jpg"
                alt="Primaire"
                class="card-img-top img-fluid rounded"
              />
              <h5 class="card-title mt-3">{{ $t('Education.Levels.primary') }}</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <img
                src="../../assets/images/education/college.png"
                alt="Collège"
                class="card-img-top img-fluid rounded"
              />
              <h5 class="card-title mt-3">{{ $t('Education.Levels.middleSchool') }}</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <img
                src="../../assets/images/education/lycee.png"
                alt="Lycée"
                class="card-img-top img-fluid rounded"
              />
              <h5 class="card-title mt-3">{{ $t('Education.Levels.highSchool') }}</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <img
                src="../../assets/images/education/universite.png"
                alt="Université"
                class="card-img-top img-fluid rounded"
              />
              <h5 class="card-title mt-3">{{ $t('Education.Levels.university') }}</h5>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <h5 class="my-4 d-flex justify-content-center">
          {{ $t('Education.methodsTitle') }}
        </h5>
        <p class="text-start">
          {{ $t('Education.methodsDescription') }}
        </p>
      </div>

      <div class="mt-5">
        <h5 class="text-secondary my-4">
          {{ $t('Education.contactInfo') }}
          <router-link to="/contact" class="nav-link text-info"
            >{{ $t('Education.contactLink') }}<span class="text-secondary">.</span></router-link
          >
        </h5>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EducationPage'
})
</script>

<style scoped>
.education-page {
  background-color: #03224c;
  padding: 20px 0;
  color: white;
}

.education-container {
  margin: auto;
  padding: 20px;
  max-width: 800px;
}

.education-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
}

.subject-list,
.levels-list {
  margin-left: 20px;
}

.card {
  border-radius: 10px;
  background-color: #0a3a71;
  color: white;
}

@media (max-width: 768px) {
  .education-title {
    font-size: 2rem;
  }
}
</style>
