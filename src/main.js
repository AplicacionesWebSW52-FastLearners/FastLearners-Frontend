// Importar Vue y PrimeVue
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';

//Estilos no usados
//import './assets/main.css';

// Importar estilos de PrimeVue
import 'primevue/resources/themes/saga-blue/theme.css';  // Tema de PrimeVue
import 'primevue/resources/primevue.min.css';            // Estilos principales de PrimeVue
import 'primeicons/primeicons.css';                      // Iconos
//import router from "@/router/index.js";

const app = createApp(App);

// Usar PrimeVue
app.use(PrimeVue);

app.use(router);

app.mount('#app');
