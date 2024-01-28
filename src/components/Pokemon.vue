<template>
    <div class="pokemon-card" @click="goToDetails" :style="{ backgroundColor: getTypeColor() }">
      <p class="pokemon-name">{{ pokemonData.name }}</p>
      <img :src="pokemonData.image" alt="Pokemon Image" class="pokemon-image">
      <div v-for="type in pokemonData.apiTypes" :key="type.name" class="type-info">
        <p>{{ type.name }}</p>
        <img :src="type.image" alt="Type Image" class="type-image">
      </div>
      <p class="generation-info">Generation: {{ pokemonData.apiGeneration }}</p>
    </div>
  </template>
  
  <script>  
  export default {
    props: {
      pokemonData: {
        type: Object,
        required: true,
      },
    },
    methods: {
          goToDetails() {
        this.$router.push({ name: 'DetailsPokemon', params: { id: this.pokemonData.id } });
      },
      getTypeColor() {
        // Récupère le premier type du Pokémon (s'il y en a)
        const firstType = this.pokemonData.apiTypes.length > 0 ? this.pokemonData.apiTypes[0].name : null;
  
        // Définit la couleur en fonction du type
        switch (firstType) {
          case 'Plante':
            return 'green';
          case 'Feu':
            return 'red';
          case 'Psy':
            return 'palevioletred';
          case 'Sol':
            return 'orange';
          case 'Eau':
            return 'blue';
          case 'Poison':
            return 'purple';
          case 'Combat':
            return 'brown';
          case 'Vol':
            return 'skyblue';
          case 'Insecte':
            return 'greenyellow';
          case 'Fée':
            return 'pink'
          case 'Roche':
            return 'peru';
          case 'Électrik':
            return 'gold';
          case 'Spectre':
            return 'blueviolet'
          case 'Acier':
            return 'lightgrey';
          case 'Glace':
            return 'aqua';
          case 'Dragon':
            return 'crimson';
          case 'Ténèbres':
            return 'black';
          default:
            return 'gray'; // Couleur par défaut
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .pokemon-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    width: 200px;
    text-align: center;
  }
  
  .pokemon-name {
    font-size: 18px;
    font-weight: bold;
  }
  
  .pokemon-image {
    width: 150px;
    height: 150px;
    margin-bottom: 10px;
  }
  
  .type-info {
    margin-top: 10px;
  }
  
  .type-image {
    width: 50px;
    height: 50px;
  }
  
  .generation-info {
    margin-top: 10px;
    font-style: italic;
  }
  </style>
  