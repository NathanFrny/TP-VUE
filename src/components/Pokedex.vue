<template>
  <div>
    <input type="number" v-model="pokemonCount" placeholder="Nombre de Pokémon" class="number-input"/>

    <select v-model="selectedGeneration" class="select-box">
      <option value="">Toutes les générations</option>
      <option v-for="gen in generations" :key="gen" :value="gen">
        Génération {{ gen }}
      </option>
    </select>

    <button @click="loadPokemon">Charger</button>
    <button @click="goToAddPokemonPage" class="add-pokemon-button">Ajouter un Pokémon</button>
    <ListeTypesPokemon :pokemon-list="pokemonList"/>
    <div class="pokedex">
      <pokemon-card
        v-for="pokemon in pokemonList"
        :key="pokemon.id"
        :pokemon-data="pokemon"
      />
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import PokemonCard from './Pokemon.vue';
import ListeTypesPokemon from './ListeTypesPokemon.vue';

export default {
  components: {
    PokemonCard,
    ListeTypesPokemon
  },
  data() {
    return {
      pokemonList: [],
      pokemonCount: 20,
      generations: [1, 2, 3, 4, 5, 6, 7, 8],
      selectedGeneration: ''
    };
  },
  methods: {
    loadPokemon() {
      let apiUrl = `https://pokebuildapi.fr/api/v1/pokemon`;

      if (this.selectedGeneration) {
        apiUrl += `/generation/${this.selectedGeneration}`;
      }

      axios.get(apiUrl)
        .then((response) => {
          this.pokemonList = response.data.slice(0, this.pokemonCount);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    goToAddPokemonPage() {
      this.$router.push({ name: 'AddPokemon' });
    }
  },
  mounted() {
    this.loadPokemon();
  },
};
</script>


<style scoped>
.button {
  padding: 10px 20px;
  margin: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #0056b3;
}

.select-box, .number-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 5px;
}

.pokedex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>
