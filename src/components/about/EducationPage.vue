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
      <h5 class="my-4">Matières enseignées :</h5>
      <ul class="subject-list text-start">
        <li>
          <strong>Mathématiques :</strong> du calcul élémentaire aux équations différentielles.
        </li>
        <li>
          <strong>Physique :</strong> de la mécanique classique à l'électricité et au magnétisme.
        </li>
        <li><strong>Chimie :</strong> de la chimie organique aux réactions chimiques avancées.</li>
        <li>
          <strong>Sciences de l'ingénieur :</strong> initiation aux systèmes mécaniques et
          électroniques.
        </li>
        <li><strong>Informatique :</strong> algorithmes, programmation, et bases de données.</li>
      </ul>

      <h5 class="my-4">Niveaux scolaires :</h5>
      <ul class="levels-list text-start">
        <li>Primaire</li>
        <li>Collège</li>
        <li>Lycée (de la seconde à la terminale)</li>
        <li>Écoles d'ingénieur, d'informatique ou licence (informatique)</li>
      </ul>

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
          <a href="/contact" class="text-info"><u>cette page</u></a
          >.
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

@media (max-width: 768px) {
  .education-title {
    font-size: 2rem;
  }
}
</style>
