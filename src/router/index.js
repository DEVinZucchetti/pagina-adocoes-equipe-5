import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/pessoa1/HomeCTA.vue'
import Pets from '../views/pessoa1/PetsView.vue'
import PetsProfile from '../views/pessoa1/PetsProfile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/pets-adocao',
      name: 'pets',
      component: Pets
    },
    {
      path: '/pets-adocao/:id/perfil',
      name: 'PetsProfile',
      component: PetsProfile
    },
  ]
})

export default router
