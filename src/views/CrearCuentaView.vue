<script>
import {ref} from "vue";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { useRouter } from 'vue-router';


export default {
  name: "CrearCuentaView",
  components: {
    InputText,
    Button
  },
  setup() {
    const name = ref('');
    const lastName = ref('');
    const email = ref('');
    const password = ref('');
    const router = useRouter();
    const navigate = (path) => {
      router.push(path);
    };

    return { navigate, name, lastName, email, password };
  }
}
</script>

<template>
  <div class="signUp-container">
    <h2 class ="signUp-header">Crear una Cuenta en FastLearners</h2>
    <InputText v-model="name" type="name" placeholder="Nombre" class="signUp-input" />
    <InputText v-model="lastName" type="lastName" placeholder="Apellido" class="signUp-input" />
    <InputText v-model="email" type="email" placeholder="Correo electrónico" class="signUp-input" />
    <InputText v-model="password" type="password" placeholder="Contraseña" class="signUp-input" />
    <InputText v-model="password" type="password" placeholder="Repetir Contraseña" class="signUp-input" />
    <Button label="Crear Cuenta" class="signUp-button" @click="navigate('/suscripciones')"></Button>
    <a href="#" class="forgot-link">¿Ya tienes una cuenta? Inicia sesión aquí</a>
  </div>
</template>

<style scoped>
.signUp-container {
  text-align: center;
  background-color: #1976d2;
  max-width: 300px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.signUp-header{
  color: #ffffff;
}

.signUp-input {
  width: 100%;
  margin-bottom: 15px;
}

.signUp-button {
  width: 100%;
  background-color: #ff0000;
  border: none;
  color: white;
}

.forgot-link {
  display: block;
  text-align: center;
  margin-top: 10px;
  color: #00f3ff;
  text-decoration: none;
}
</style>