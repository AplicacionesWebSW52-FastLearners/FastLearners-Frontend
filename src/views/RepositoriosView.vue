<script>
import Card from 'primevue/card';

export default {
  name: "RepositoriosView",
  components: {
    Card
  },
  data() {
    return {
      repositories: []
    };
  },
  created() {
    fetch('http://localhost:3000/repositories')
        .then(response => response.json())
        .then(data => {
          this.repositories = data;
        });
  }
}
</script>

<template>
  <div class="repository-container">
    <h1 class="text-section">Repositorios</h1>
    <div v-for="repo in repositories" :key="repo.id" class="repository-item">
      <Card class="card">
        <template #title>
          <i class="pi pi-folder" style="vertical-align: middle; margin-right: 8px;"></i>
          {{ repo.category }}
        </template>
        <p>{{ repo.description }}</p>
        <template #footer>
          <span>{{ repo.files }} artículos</span>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.text-section {
  max-width: fit-content;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8); /* Fondo blanco con opacidad para mejorar la legibilidad */
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Opcional: Sombra para resaltar el texto del fondo */
}
.repository-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.repository-item {
  margin-bottom: 20px;
  transition: border-color 0.3s; /* Suaviza la transición del cambio de color */
}

/* Estilo base para las tarjetas */
.card {
  border: 1px solid #ccc; /* Color de borde inicial */
}

/* Cambio de color en hover */
.card:hover {
  border-color: #1976D2; /* Cambia el color del borde al hacer hover */
}
</style>
