<template>
  <div class="education-page">
    <div class="education-container">
      <h1 class="education-title my-5">Enseignement en Ligne</h1>
      <p>
        Je suis professeur particulier en ligne depuis 2022, j'accompagne des élèves de la primaire
        à la terminale dans les matières scientifiques. Mon objectif est de rendre ces matières
        accessibles à tous, en aidant chaque élève à développer une compréhension profonde et
        durable.
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
              <h5 class="card-title mt-3">Informatique</h5>
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
              <h5 class="card-title mt-3">Mathématiques</h5>
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
              <h5 class="card-title mt-3">Électronique</h5>
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
              <h5 class="card-title mt-3">Physique</h5>
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
              <h5 class="card-title mt-3">Mécanique</h5>
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
              <h5 class="card-title mt-3">Chimie</h5>
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
              <h5 class="card-title mt-3">Sciences de l'ingénieur</h5>
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
              <h5 class="card-title mt-3">Algorithmie</h5>
            </div>
          </div>
        </div>
      </div>
      <h3 class="my-4">Niveaux scolaires :</h3>
      <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <img
                src="../../assets/images/education/primaire.jpg"
                alt="Primaire"
                class="card-img-top img-fluid rounded"
              />
              <h5 class="card-title mt-3">Primaire</h5>
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
              <h5 class="card-title mt-3">Collège</h5>
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
              <h5 class="card-title mt-3">Lycée</h5>
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
              <h5 class="card-title mt-3">Université</h5>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <h5 class="my-4 d-flex justify-content-center">Méthodes d'enseignement :</h5>
        <p class="text-start">
          J'adapte mes méthodes pédagogiques en fonction des besoins de chaque élève, en mettant
          l'accent sur la résolution de problèmes et l'apprentissage par l'exemple. Les cours se
          déroulent en ligne via des outils interactifs, permettant un suivi personnalisé et une
          communication efficace. <br />
          Je propose également des exercices et des devoirs à réaliser entre les séances, pour
          renforcer les acquis et préparer les examens. <br />
          Enfin, je suis disponible pour répondre à toutes les questions des élèves en dehors des
          cours, par e-mail ou messagerie instantanée.<br />
        </p>
      </div>

      <div class="mt-5">
        <h5 class="text-secondary my-4">
          Pour plus d'informations ou pour réserver un cours, veuillez consulter
          <router-link to="/contact" class="nav-link text-info"
            >cette page<span class="text-secondary">.</span></router-link
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
