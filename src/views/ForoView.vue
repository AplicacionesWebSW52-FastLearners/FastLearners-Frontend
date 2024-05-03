<script>
import Card from 'primevue/card';

export default {
  name: "ForoView",
  components: {
    Card
  },
  data() {
    return {
      forums: []
    };
  },
  created() {
    fetch('http://localhost:3000/forums')
        .then(response => response.json())
        .then(data => {
          this.forums = data;
        });
  }
}
</script>

<template>
  <div class="forum-container">
    <h1>Foro Estudiantil</h1>
    <div v-for="forum in forums" :key="forum.id" class="forum-item">
      <Card class="card">
        <template #header>
          <div class="forum-header">
            <div class="forum-details">
              <div class="forum-title">{{ forum.title }}</div>
              <p>{{ forum.description }}</p>
            </div>
            <img :src="forum.image" alt="Forum Image" class="forum-image">
            <div class="forum-initiator">
              <span class="initiator-name">By {{ forum.lastPoster }}</span><br>
              <span class="initiator-time">{{ forum.lastPostTime }}</span>
            </div>
          </div>
        </template>
        <template #footer>
          <div class="forum-stats">
            <span>{{ forum.threads }} temas</span>
            <span>{{ forum.posts }} mensajes</span>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>


<style scoped>
.forum-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.forum-item {
  margin-bottom: 20px;
}

.forum-header {
  display: flex;
  align-items: center;
  padding: 20px;  /* Espacio interior para todo el header */
}

.forum-image {
  width: 60px;
  height: 60px;
  margin-right: 20px;
  border-radius: 50%;  /* Hace la imagen circular */
}

.forum-details {
  flex-grow: 1;
  padding-right: 20px;  /* Espacio adicional a la derecha para evitar que el texto toque el borde */
}

.forum-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 5px;  /* Espacio debajo del título para separarlo de la descripción */
}

.forum-stats {
  display: flex;
  justify-content: space-between;
  background-color: #f4f4f4; /* Color de fondo para el pie de página */
  padding: 10px 20px; /* Espacio interno */
  border-top: 1px solid #ccc; /* Línea divisoria */
}

.card {
  border: 1px solid #ccc; /* Color de borde inicial */
}

/* Cambio de color en hover */
.card:hover {
  border-color: #1976D2; /* Cambia el color del borde al hacer hover */
}
</style>
