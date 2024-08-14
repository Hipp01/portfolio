<template>
  <div class="home">
    <div class="bg-image">
      <div class="overlay text-center text-white py-5 px-3">
        <h1>Welcome to My Portfolio</h1>
        <div class="mt-4">
          <button class="btn btn-primary me-2" @click="goToProject('project1')">Project 1</button>
          <button class="btn btn-primary me-2" @click="goToProject('project2')">Project 2</button>
          <button class="btn btn-primary" @click="goToProject('project3')">Project 3</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Home',
  setup() {
    const router = useRouter()

    const goToProject = (project: string) => {
      router.push({ name: 'project', params: { project } })
    }

    return {
      goToProject
    }
  }
})
</script>

<style scoped>
.home {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-image {
  background: url('@/assets/octopus.png') no-repeat center center;
  background-size: cover;
  height: 100%;
  width: 100%;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
}
</style>
