<template>
  <div>
    <h3>Types de Pokémon et leurs occurrences:</h3>
    <table class="types-table">
      <tr v-for="(count, type) in typeCounts" :key="type">
        <td :class="getTypeColorClass(type)">{{ type }}</td>
        <td>{{ count }}</td>
      </tr>
    </table>
  </div>
</template>

  
<script>
export default {
  name: 'ListeTypesPokemon',
  props: {
    pokemonList: {
      type: Array,
      required: true
    }
  },
  computed: {
    typeCounts() {
      const counts = {};
      this.pokemonList.forEach(pokemon => {
        const type = pokemon.apiTypes[0].name; // Assumant que apiTypes[0] est le type principal
        if (!counts[type]) {
          counts[type] = 0;
        }
        counts[type]++;
      });
      return counts;
    }
  },
  methods: {
    getTypeColorClass(type) {
      // Ajoutez des cas pour chaque type de Pokémon
      switch (type) {
        case 'Feu':
          return 'type-fire';
        case 'Plante':
          return 'type-plant';
        case 'Psy':
          return 'type-psy';
        case 'Sol':
          return 'type-sol';
        case 'Eau':
          return 'type-aqua';
        case 'Poison':
          return 'type-poison';
        case 'Combat':
          return 'type-combat';
        case 'Vol':
          return 'type-vol'; 
        case 'Insecte':
          return 'type-insect';
        case 'Fée':
          return 'type-fairy';
        case 'Roche':
          return 'type-rock';
        case 'Électrik':
          return 'type-elektrik';
        case 'Spectre':
          return 'type-spectre';
        case 'Acier':
          return 'type-steel';
        case 'Glace':
          return 'type-ice';
        case 'Dragon':
          return 'type-dragon';
        case 'Ténèbres':
          return 'type-darkness';
        default:
          return 'type-default';
      }
    }
  }
};
</script>
  
<style scoped>
.types-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.types-table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.type-icon {
  width: 30px;
  height: 30px;
}

/* Feu */
.type-fire {
  background-color: #F08030;
  color: white;
}
.type-fire:hover {
  background-color: #E0691A;
}

/* Plante */
.type-plant {
  background-color: #78C850;
  color: white;
}
.type-plant:hover {
  background-color: #5CA43B;
}

/* Psy */
.type-psy {
  background-color: #F85888;
  color: white;
}
.type-psy:hover {
  background-color: #F06176;
}

/* Sol */
.type-sol {
  background-color: #E0C068;
  color: white;
}
.type-sol:hover {
  background-color: #CDBA58;
}

/* Eau */
.type-aqua {
  background-color: #6890F0;
  color: white;
}
.type-aqua:hover {
  background-color: #5070D0;
}

/* Poison */
.type-poison {
  background-color: #A040A0;
  color: white;
}
.type-poison:hover {
  background-color: #903890;
}

/* Combat */
.type-combat {
  background-color: #C03028;
  color: white;
}
.type-combat:hover {
  background-color: #A82820;
}

/* Vol */
.type-vol {
  background-color: #A890F0;
  color: white;
}
.type-vol:hover {
  background-color: #9070E0;
}

/* Insecte */
.type-insect {
  background-color: #A8B820;
  color: white;
}
.type-insect:hover {
  background-color: #909A10;
}

/* Fée */
.type-fairy {
  background-color: #EE99AC;
  color: white;
}
.type-fairy:hover {
  background-color: #DD889C;
}

/* Roche */
.type-rock {
  background-color: #B8A038;
  color: white;
}
.type-rock:hover {
  background-color: #9C9030;
}

/* Électrik */
.type-elektrik {
  background-color: #F8D030;
  color: black;
}
.type-elektrik:hover {
  background-color: #E0C020;
}

/* Spectre */
.type-spectre {
  background-color: #705898;
  color: white;
}
.type-spectre:hover {
  background-color: #604788;
}

/* Acier */
.type-steel {
  background-color: #B8B8D0;
  color: black;
}
.type-steel:hover {
  background-color: #A0A0B0;
}

/* Glace */
.type-ice {
  background-color: #98D8D8;
  color: black;
}
.type-ice:hover {
  background-color: #88C8C8;
}

/* Dragon */
.type-dragon {
  background-color: #7038F8;
  color: white;
}
.type-dragon:hover {
  background-color: #6028E8;
}

/* Ténèbres */
.type-darkness {
  background-color: #705848;
  color: white;
}
.type-darkness:hover {
  background-color: #604838;
}

/* Types par défaut */
.type-default {
  background-color: #A8A878;
  color: white;
}
.type-default:hover {
  background-color: #8C8C68;
}


.type-default {
  background-color: #A8A878;
  color: white;
}

</style>
