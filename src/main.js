import './assets/main.css'

import { createStore } from 'vuex'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const store = createStore({
    state: {
      no_control: '',
      nommbre: '',
      edad: '',
      semestre: '',
      carrera: '',
      mat_agregada: '',
      mat_especial: '',
      act_complementaria: '',
    },
    mutations: {
      enviarNoControl(state, nomc) {
          state.no_control = nomc
      },
      enviarNombre(state, numc) {
          state.nommbre = numc
      },
      enviarEdad(state, ed) {
          state.edad = ed
      },
      enviarSemestre(state, sem) {
          state.semestre = sem
      },
      enviarCarrera(state, ca) {
          state.carrera = ca
      },
      enviarMat_agregada(state, matagr) {
          state.mat_agregada = matagr
      },
      enviarMat_especial(state, matesp) {
          state.mat_especial = matesp
      },
      enviarAct_complementariap(state, actext) {
          state.act_complementaria = actext
      }
    }
    
  });

app.use(router)
app.use(store)

app.mount('#app')
