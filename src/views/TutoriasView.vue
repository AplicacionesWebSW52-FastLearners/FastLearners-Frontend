<script>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import VueDatePicker from '@vuepic/vue-datepicker';
import vSelect from 'vue-select'
import Card from "primevue/card";
import '@vuepic/vue-datepicker/dist/main.css'
import 'vue-select/dist/vue-select.css';
import { useRouter } from 'vue-router';

export default {
  name: "TutoriasView",
  components: {
    InputText,
    Button,
    Card,
    VueDatePicker,
    vSelect
  },
  setup() {
    const topics = ref([
      {
        "id": 1,
        "category": "Programming"
      },
      {
        "id": 2,
        "category": "Software Design"
      },
      {
        "id": 3,
        "category": "Development suite configuration"
      },
      {
        "id": 4,
        "category": "Documentation"
      },
      {
        "id": 5,
        "category": "Other"
      }
    ]);
    const date = ref('');
    const description = ref('');
    const router = useRouter();
    const navigate = (path) => {
      router.push(path);
    };

    return { navigate, topics, date, description };
  }
}
</script>

<template>
  <div class="tutorias-container">
    <h1 class="text-section">Tutorías FastLearners</h1>
    <card class="p-card">
      <template v-slot:title>
        Reserva una tutoría con FastLearners
      </template>
      <template v-slot:subtitle>
        Por favor, llene el siguiente formulario:
      </template>
      <template v-slot:content>
        <p> Elige el tema de la tutoría:</p>
        <v-select label="category" :options="topics"></v-select>
        <p> Elige la fecha y hora de la tutoría:</p>
        <VueDatePicker v-model="date"></VueDatePicker>
        <p> Descríbanos brevemente la razón de su tutoría: </p>
        <InputText v-model="description" type="description" placeholder="Máx. 250 palabras" class="description"></InputText>
        <Button label="Solicitar tutoría" class="confirm-button" @click="navigate('/')"></Button>
      </template>
    </card>
  </div>
</template>

<style scoped>
.tutorias-container{
  text-align: center;
  margin: 40px auto;
  max-width: 800px;
}
.p-card p {
  text-align: left;
}
.text-section{
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.description{
  width: 100%;
  margin-bottom: 15px;
}
.confirm-button{
  background-color: #ff0000;
  border: black;
  color: white;
}
</style>