<script>
import { ref } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';

export default {
  name: "SuscripcionesView",
  components: {
    Card,
    Button
  },
  setup() {
    const plans = ref([
      { id: 1, name: 'Plan Básico', price: 'S/.15.00 al mes', benefits: ['25 videos por mes', '10 repositorios por mes', 'Acceso a la documentación', 'Acceso al foro'] },
      { id: 2, name: 'Plan Regular', price: 'S/.20.00 al mes', benefits: ['50 videos por mes', '20 repositorios por mes', 'Acceso a la documentación', 'Acceso al foro'] },
      { id: 3, name: 'Plan Premium', price: 'S/.50.00 al mes', benefits: ['Videos ilimitados', 'Repositorios ilimitados', 'Acceso a la documentación', 'Acceso al foro'] }
    ]);

    return { plans };
  }
}
</script>

<template>
  <div class="p-grid">
    <div class="p-col" v-for="plan in plans" :key="plan.id">
      <Card>
        <template #title>
          {{ plan.name }}
        </template>
        <template #subtitle>
          {{ plan.price }}
        </template>
        <ul>
          <li v-for="benefit in plan.benefits" :key="benefit">{{ benefit }}</li>
        </ul>
        <template #footer>
          <Button label="¡Suscríbete ya!" class="p-button-success" @click="subscribe(plan.id)" />
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.p-grid {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}
.p-col {
  flex: 1;
  padding: 10px;
}
</style>