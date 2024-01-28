    <template>
        <div>
            <button @click="goBack" class="back-button">Retour</button>
            <h2>Ajouter un Pokémon</h2>
            <form @submit.prevent="addPokemon">
            <div>
                <label for="name">Nom:</label>
                <input type="text" id="name" v-model="newPokemon.name" required>
            </div>

            <div>
                <label for="generation">Génération:</label>
                <input type="number" id="generation" v-model="newPokemon.apiGeneration">
            </div>

            <div>
                <label for="hp">PV:</label>
                <input type="number" id="hp" v-model="newPokemon.stats.HP">
            </div>
            <div>
                <label for="attack">Attaque:</label>
                <input type="number" id="attack" v-model="newPokemon.stats.attack">
            </div>
            <div>
                <label for="defense">Defense:</label>
                <input type="number" id="defense" v-model="newPokemon.stats.defense">
            </div>
            <div>
                <label for="specialAttack">Attaque Spéciale:</label>
                <input type="number" id="specialAttack" v-model="newPokemon.stats.specialAttack">
            </div>
            <div>
                <label for="specialDefense">Défense Spéciale:</label>
                <input type="number" id="specialDefense" v-model="newPokemon.stats.specialDefense">
            </div>
            <div>
                <label for="speed">Vitesse:</label>
                <input type="number" id="speed" v-model="newPokemon.stats.speed">
            </div>

            <div>
                <h3>Résistances de Types</h3>
                <div v-for="(resistance, index) in newPokemon.resistances" :key="index">
                <select v-model="resistance.type">
                    <option disabled value="">Choisir un type</option>
                    <!-- Remplir avec les types disponibles -->
                    <option value="Feu">Feu</option>
                    <!-- Ajoutez d'autres types ici -->
                </select>

                <select v-model="resistance.relation">
                    <option value="resistant">Résistant (x0.5)</option>
                    <option value="twice_resistant">Très Résistant (x0.25)</option>
                    <option value="neutral">Neutre (x1)</option>
                    <option value="vulnerable">Vulnérable (x2)</option>
                </select>

                <button @click="removeResistance(index)">Supprimer</button>
            </div>
    <button @click="addResistance">Ajouter une Résistance</button>
  </div>

            <div>
                <button type="submit">Ajouter</button>
            </div>
            </form>
        </div>
    </template>
    
    
    <script>
    export default {
    data() {
        return {
            newPokemon: {
            name: '',
            apiGeneration: 1,
            stats: {
            HP: 0,
            attack: 0,
            defense: 0,
            specialAttack: 0,
            specialDefense: 0,
            speed: 0
            },
        }
        };
    },
    methods: {
        addPokemon() {
        // Logique pour ajouter un nouveau Pokémon
        console.log(this.newPokemon);
        // Ici, vous pouvez appeler une méthode pour sauvegarder les données ou les envoyer à une API
        },

        goBack() {
        this.$router.go(-1);
        },

        addPokemon() {
            // Exemple de sauvegarde dans LocalStorage
            let pokemons = JSON.parse(localStorage.getItem('pokemons')) || [];
            pokemons.push(this.newPokemon);
            localStorage.setItem('pokemons', JSON.stringify(pokemons));

            // Rediriger vers la page du Pokédex après l'ajout
            this.$router.push({ name: 'Pokedex' });
        }
    }
    };
    </script>

    <style scoped>
        
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

    </style>
    