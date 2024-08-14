<template>
  <div>
    <h1>Projects Page</h1>
    <div v-for="project in projects" :key="project.id">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Project 1',
          description: 'This is the description of Project 1.'
        },
        {
          id: 2,
          title: 'Project 2',
          description: 'This is the description of Project 2.'
        },
        {
          id: 3,
          title: 'Project 3',
          description: 'This is the description of Project 3.'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Add your custom styles here */
</style>
