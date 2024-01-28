<template>
  <div v-if="pokemon">
    <button @click="goBack" class="back-button">Retour</button>
    <h2>{{ pokemon.name }} (Génération {{ pokemon.apiGeneration }})</h2>
    <img :src="pokemon.image" alt="Image de Pokémon">
    <p>Pré-évolution: {{ pokemon.apiPreEvolution?.name }}</p>
    <p>Évolutions: <span v-for="(evolution, index) in pokemon.apiEvolutions" :key="index">{{ evolution.name }}</span></p>
    <p>Types: 
      <span v-for="(type, index) in pokemon.apiTypes" :key="index">
        <img :src="type.image" :alt="type.name" class="type-icon">{{ type.name }}
      </span>
    </p>
    <p>Résistances:</p>
    <table class="info-table">
    <tbody>
      <tr v-for="(resistance, index) in pokemon.apiResistances" :key="index">
        <td>{{ resistance.name }}</td>
        <td :class="getDamageRelationClass(resistance.damage_relation)">
          {{ resistance.damage_relation }}
        </td>
        <td>(x{{ resistance.damage_multiplier }})</td>
      </tr>
    </tbody>
  </table>

    <p>Statistiques:</p>
    <table class="info-table">
      <tbody>
        <tr><td>HP:</td> <td>{{ pokemon.stats.HP }}</td></tr>
        <tr><td>Attaque:</td> <td>{{ pokemon.stats.attack }}</td></tr>
        <tr><td>Défense:</td> <td>{{ pokemon.stats.defense }}</td></tr>
        <tr><td>Attaque Spéciale:</td> <td>{{ pokemon.stats.special_attack }}</td></tr>
        <tr><td>Défense Spéciale:</td> <td>{{ pokemon.stats.special_defense }}</td></tr>
        <tr><td>Vitesse:</td> <td>{{ pokemon.stats.speed }}</td></tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <p>Chargement des détails du Pokémon...</p>
  </div>
</template>

  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        pokemon: null
      };
    },
    watch: {
      '$route'() {
        this.getPokemonDetails();
      }
    },
    props: {
      id: {
        type: String,
        required: true
      }
    },
    mounted() {
      this.getPokemonDetails();
    },
    methods: {
      getPokemonDetails() {
        axios.get(`https://pokebuildapi.fr/api/v1/pokemon/${this.$route.params.id}`)
          .then(response => {
            this.pokemon = response.data;
          })
          .catch(error => console.error(error));
      },

      goBack() {
        this.$router.go(-1);
      },


    getDamageRelationClass(damageRelation) {
        switch (damageRelation) {
          case 'resistant':
            return 'text-green';
          case 'vulnerable':
            return 'text-red';
          case 'neutral':
            return 'text-white';
          case 'twice_resistant':
            return 'text-dark-green';
          default:
            return '';
        }
      }
    }
  };
  </script>

<style scoped>

.pokemon-details {
  max-width: 600px;
  margin: auto;
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  color: #fff;
}

.pokemon-image {
  max-width: 100%;
  height: auto;
}

.type-icon {
  width: 30px;
  height: 30px;
  vertical-align: middle;
  margin-right: 5px;
}

.back-button {
  position: fixed;
  top: 10px;
  left: 10px;
  padding: 10px 20px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1000; 
}

.back-button:hover {
  background-color: darkred;
}

.info-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  margin-bottom: 20px;
}

.info-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.info-table tr:nth-child(even) {
  background-color: #4e4e4e;
}

.info-table tr:hover {
  background-color: #a2a2a2;
}

.text-green {
  color: rgb(74, 160, 74);
}

.text-red {
  color: red;
}

.text-white {
  color: white;
}

.text-dark-green {
  color: rgb(0, 255, 0);
}

</style>
