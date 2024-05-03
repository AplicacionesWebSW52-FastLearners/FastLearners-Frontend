<script>
export default {
  name: "HomeView",
  data() {
    return {

    };
  }
}
</script>

<template>
  <div class="home-container">
    <div class="text-section">
      <h1>Accede a repositorios de todo el mundo y capacítate con expertos</h1>
      <p>Aprende de los mejores e interactúa con otros programadores como tú</p>
      <button class="primary-button">Comienza ahora</button>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.text-section {
  max-width: 600px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8); /* Fondo blanco con opacidad para mejorar la legibilidad */
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Opcional: Sombra para resaltar el texto del fondo */
}

h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 30px;
}

.primary-button {
  padding: 10px 20px;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.primary-button:hover {
  background-color: #004494;
}
</style>
