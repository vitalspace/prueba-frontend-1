<script>
import { getpokemonbyrange } from "../services/PokemonServices";

export default {
  data() {
    return {
      start: "",
      end: "",
      pokemons: [],
      errorMessage: "",
    };
  },
  methods: {
    async submit() {
      if (this.start && this.end && this.end > this.start) {
        getpokemonbyrange(this.start, this.end)
          .then((result) => {
            this.pokemons = result.data;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.errorMessage = "The second rank must always be greater than the first.";
        setTimeout(() => {
          this.errorMessage = "";
        }, 5000);
      }
    },
  },

  mounted() {},
};
</script>

<template>
  <div class="d-flex flex-column align-items-center vh-100 gap-4 p-4">
    <div class="border d-flex flex-column gap-2 p-4 rounded-4">
      <div>
        <h1>Filter Pokemon</h1>
      </div>
      <div class="d-flex">
        <input
          v-model="start"
          class="form-control"
          type="number"
          min="1"
          placeholder="1"
        />
        <input
          v-model="end"
          class="form-control"
          type="number"
          :min="start + 1"
          placeholder="1"
        />
      </div>
      <div v-if="errorMessage" class="text-danger">{{ errorMessage }}</div>
      <div class="">
        <button
          :disabled="!start || !end"
          @click="submit"
          class="w-100 p-1 rounded-2 btn btn-primary"
        >
          Submit
        </button>
      </div>
    </div>

    <div v-if="pokemons.length > 0">
      <table class="table border">
        <thead>
          <tr>
            <th>ID</th>
            <th>Imagen</th>
            <th>Name</th>
            <th>Move</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in pokemons" :key="index">
            <td>{{ item.id }}</td>
            <td>
              <img
                :src="item.sprites[0]"
                alt="Imagen del Pokémon"
                class="img-thumbnail"
              />
            </td>
            <td>{{ item.name }}</td>
            <td>{{ item.move.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
