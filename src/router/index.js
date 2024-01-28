import { createRouter, createWebHistory } from 'vue-router';
import DetailsPokemon from '../components/DetailsPokemon.vue';
import Pokedex from '../components/Pokedex.vue';
import AddPokemon from '../components/AddPokemon.vue';

const routes = [
  {
    path: '/',
    name: 'Pokedex',
    component: Pokedex
  },

  {
    path: '/add-pokemon',
    name: 'AddPokemon',
    component: AddPokemon
  },

  {
    path: '/:id',
    name: 'DetailsPokemon',
    component: DetailsPokemon,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
