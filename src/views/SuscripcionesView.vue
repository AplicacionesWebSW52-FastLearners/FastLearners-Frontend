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
      {
        id: 1,
        name: 'Plan Básico',
        price: 'S/.15.00 al mes',
        benefits: [
          { text: '25 videos por mes', icon: 'pi pi-video' },
          { text: '10 repositorios por mes', icon: 'pi pi-folder-open' },
          { text: 'Acceso a la documentación', icon: 'pi pi-info-circle' },
          { text: 'Acceso al foro', icon: 'pi pi-users' }
        ]
      },
      {
        id: 2,
        name: 'Plan Regular',
        price: 'S/.20.00 al mes',
        benefits: [
          { text: '50 videos por mes', icon: 'pi pi-video' },
          { text: '20 repositorios por mes', icon: 'pi pi-folder-open' },
          { text: 'Acceso a la documentación', icon: 'pi pi-info-circle' },
          { text: 'Acceso al foro', icon: 'pi pi-users' }
        ]
      },
      {
        id: 3,
        name: 'Plan Premium',
        price: 'S/.50.00 al mes',
        benefits: [
          { text: 'Videos ilimitados', icon: 'pi pi-video' },
          { text: 'Repositorios ilimitados', icon: 'pi pi-folder-open' },
          { text: 'Acceso a la documentación', icon: 'pi pi-info-circle' },
          { text: 'Acceso al foro', icon: 'pi pi-users' }
        ]
      }
    ]);

    return { plans };
  }
}
</script>

<template>
  <div class="subscription-container">
    <div class="header">
      <h1>Nuestros planes y precios</h1>
      <p>Actualiza para desbloquear acceso a videos educativos, repositorios colaborativos y mucho más.</p>
    </div>
    <div class="p-grid">
      <div v-for="plan in plans" :key="plan.id" class="p-col card-content">
        <Card class="p-grid p-col">
          <template v-slot:title>
            {{ plan.name }}
          </template>
          <template v-slot:subtitle>
            {{ plan.price }}
          </template>
          <template v-slot:content>
            <ul>
              <li v-for="benefit in plan.benefits" :key="benefit.text">
                <i :class="benefit.icon" style="margin-right: 5px;"></i>
                {{ benefit.text }}
              </li>
            </ul>
          </template>
          <template v-slot:footer>
            <Button label="Comprar plan" class="p-button-success" @click="subscribe(plan.id)" />
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>


<style scoped>
.subscription-container {
  text-align: center;
  margin: 40px;
}

.header h1 {
  font-size: 32px;
  color: #333;
}

.header p {
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
}

.p-grid {
  display: flex;
  justify-content: center; /* Centra los elementos horizontalmente */
  flex-wrap: wrap; /* Permite que los elementos se envuelvan si no hay suficiente espacio */
  gap: 40px; /* Espacio entre los cards */
  padding: 20px; /* Espacio alrededor del contenedor */
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}

.p-col {
  flex: 0 1 400px;
  display: flex; /* Usa flexbox para centrar contenido de tarjetas */
  flex-direction: column; /* Orientación vertical de los elementos dentro de la tarjeta */
  align-items: center; /* Alinea elementos horizontalmente al centro */
  justify-content: center; /* Alinea elementos verticalmente al centro */
  text-align: center; /* Asegura que el texto también esté centrado */
  border-radius: 20px; /* Bordes redondeados */
}

.card-content {
  width: 100%;
  padding: 20px;
}
</style>