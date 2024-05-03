<script>
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import { useRoute, useRouter } from 'vue-router';

export default {
  components: {
    Toolbar,
    Button
  },
  setup() {
    const router = useRouter();
    const navigate = (path) => {
      router.push(path);
    };
    return { navigate };
  }
}
</script>

<template>
  <Toolbar class="p-toolbar">
    <template #start>
      <img src="/LogoPrincipal.svg" alt="Logo" class="logo" />
      <h1>FastLearners</h1>
    </template>
    <template #center>
      <Button class="p-button-text" label="Página Principal" @click="navigate('/')"></Button>
      <Button class="p-button-text" label="Foro Estudiantil" @click="navigate('/foro')"></Button>
      <Button class="p-button-text" label="Repositorios" @click="navigate('/repositorios')"></Button>
      <Button class="p-button-text" label="Material Multimedia" @click="navigate('/material')"></Button>
      <Button class="p-button-text" label="Tutorías" @click="navigate('/tutorias')"></Button>
      <Button class="p-button-text" label="Planes de Suscripción" @click="navigate('/suscripciones')"></Button>
    </template>
    <template #end>
      <Button class="p-button-contrast" label="Iniciar Sesión" @click="navigate('/iniciosesion')"></Button>
      <Button class="p-button-text p-button-raised" label="Crear Cuenta" @click="navigate('/mi-cuenta')"></Button>
    </template>
  </Toolbar>
</template>

<style scoped>
.logo {
  width: 50px;
  height: auto;
  margin-right: 10px;
}
h1 {
  margin-right: 50px;
  font-size: 24px;
}
.p-button-text {
  text-decoration: none;
  color: #FFFFFF;
  background-color: #1976D2;
  padding: 10px 20px;
  border-radius: 5px; /* Bordes redondeados */
  margin-right: 10px; /* Espacio entre botones */
  transition: background-color 0.3s; /* Transición suave para el hover */
}
.p-button-raised {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Sombra para un efecto elevado */
  background-color: #1daad1;
}
.p-button-text:hover {
  background-color: #135CA3; /* Color más oscuro al hacer hover */
}
.p-button-contrast{
  background-color: #577298;
}
.p-button-contrast:hover{
  background-color: #000000;
}
.p-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px; /* Padding alrededor de la barra de herramientas */
}
</style>