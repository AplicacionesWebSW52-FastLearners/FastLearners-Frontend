<script>
import Card from 'primevue/card';

export default {
  name: "RepositoriosView",
  components: {
    Card
  },
  data() {
    return {
      repositories: [],
      staticRepositories: [],
      query: '',
      channels: [],
      loading: false
    };
  },
  methods: {
    searchContent() {
      this.loading = true;
      fetch(`http://localhost:3000/repositories?category=${this.query}`)
          .then(response => response.json())
          .then(data => {
            this.repositories = data;
            this.loading = false;
          })
          .catch(error => {
            console.error('Error fetching repositories:', error);
            this.loading = false;
          });
    }
  },
  watch: {
    query(newQuery) {
      if (!newQuery) {
        this.repositories = [];
      }
    }
  },
  created() {
    fetch('http://localhost:3000/repositories')
        .then(response => response.json())
        .then(data => {
          data.sort(() => Math.random() - 0.5);
          this.staticRepositories = data.slice(0, 3);
        });
    fetch('http://localhost:3000/channels')
        .then(response => response.json())
        .then(data => {
          data.sort(() => Math.random() - 0.5);
          this.channels = data.slice(0, 3);
        });
  }
}
</script>

<template>
  <div class = "main-container">
    <div class="search-container">
      <h1 class="text-section">Buscar Contenido Multimedia</h1>
      <div class="search-input">
        <input type="text" v-model="query" placeholder="Buscar Contenido...">
        <button @click="searchContent">Buscar</button>
      </div>
      <div v-if="loading" class="loading-message">Cargando...</div>
    </div>
    <div v-if="repositories.length > 0" class="repository-search-container">
      <h1 class="text-section">Repositorios Existentes</h1>
      <div class="repository-grid">
        <div v-for="repo in repositories" :key="repo.id" class="repository-item">
          <Card class="card">
            <template #title>
              <i class="pi pi-folder" style="vertical-align: middle; margin-right: 8px;"></i>
              {{ repo.category }}
            </template>
            <template #footer>
              <span>{{ repo.files }} artículos</span>
            </template>
          </Card>
        </div>
      </div>
    </div>
    <div class = "body-container">
      <div class="repository-container">
        <h1 class="text-section">Repositorios que te podrían interesar</h1>
        <div class="repository-grid">
          <div v-for="repo in staticRepositories" :key="repo.id" class="repository-item">
            <Card class="card">
              <template #title>
                <i class="pi pi-folder" style="vertical-align: middle; margin-right: 8px;"></i>
                {{ repo.category }}
              </template>
              <template #footer>
                <span>{{ repo.files }} artículos</span>
              </template>
            </Card>
          </div>
        </div>
      </div>
      <div class="channels-container">
        <h1 class="text-section">Canales importantes</h1>
        <div class ="channel-grid">
          <div v-for="chann in channels" :key="chann.id" class="channel-item">
            <Card class="card">
              <template #title>
                <i class="pi pi-folder" style="vertical-align: middle; margin-right: 8px;"></i>
                {{ chann.author }}
              </template>
              <template #content>
                <span>{{ chann.category }} </span>
              </template>
              <template #footer>
                <span>{{ chann.files }} artículos</span>
              </template>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.repository-container {
  float: right;
  width: 45%;
}
.channels-container{
  float: left;
  width: 45%;
}

.search-container,
.repository-search-container,
.repository-container,
.channels-container {
  margin-bottom: 30px;
}

.text-section {
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.search-input {
  display: flex;
  align-items: center;
}

.search-input input[type="text"] {
  flex: 1;
  margin-right: 10px;
  padding: 8px;
  font-size: 16px;
}

.search-input button {
  padding: 8px 16px;
  font-size: 16px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.loading-message {
  margin-top: 20px;
  font-size: 18px;
}

.repository-grid,
.channel-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.card {
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  min-width: 100px;
}

.card:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}
</style>