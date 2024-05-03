// Importar Vue y PrimeVue
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import VueDatePicker from '@vuepic/vue-datepicker';

// Importar estilos de PrimeVue
import 'primevue/resources/themes/saga-blue/theme.css';  // Tema de PrimeVue
import 'primevue/resources/primevue.min.css';            // Estilos principales de PrimeVue
import 'primeicons/primeicons.css';
import '@vuepic/vue-datepicker/dist/main.css'
// Iconos

const app = createApp(App);

// Usar PrimeVue
app.use(PrimeVue);
app.use(router);
app.use(VueDatePicker);
app.mount('#app');
