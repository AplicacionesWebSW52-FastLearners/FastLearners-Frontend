import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ForoView from '../views/ForoView.vue'
import MaterialView from '../views/MaterialView.vue'
import TutoriasView from '../views/TutoriasView.vue'
import SuscripcionesView from '../views/SuscripcionesView.vue'
import MiCuentaView from '../views/MiCuentaView.vue';
import RepositoriosView from '../views/RepositoriosView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/foro', name: 'foro', component: ForoView },
    { path: '/repositorios', name: 'repositorios', component: RepositoriosView},
    { path: '/material', name: 'material', component: MaterialView },
    { path: '/tutorias', name: 'tutorias', component: TutoriasView },
    { path: '/suscripciones', name: 'suscripciones', component: SuscripcionesView },
    { path: '/micuenta', name: 'micuenta', component: MiCuentaView },
  ]
});

export default router
