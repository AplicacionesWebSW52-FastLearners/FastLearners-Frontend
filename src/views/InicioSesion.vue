<script>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { useRouter } from 'vue-router';

export default {
  name: "InicioSesion",
  components: {
    InputText,
    Button
  },
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();
    const navigate = (path) => {
      router.push(path);
    };

    return {navigate,  email, password };

  }
}
</script>

<template>
  <div class="login-container">
    <h2 class="login-header">Iniciar Sesión</h2>
    <InputText v-model="email" placeholder="Correo electrónico" class="login-input" />
    <InputText v-model="password" type="password" placeholder="Contraseña" class="login-input" />
    <Button label="Ingresar" class="login-button" @click="navigate('/foro')"></Button>
    <a href="#" class="forgot-link">¿Olvidaste tu contraseña?</a>
  </div>
</template>

<style scoped>
.login-container {
  text-align: center;
  background-color: #1976d2;
  max-width: 300px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-header{
  color: #ffffff;
}

.login-input {
  width: 100%;
  margin-bottom: 15px;
}

.login-button {
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
