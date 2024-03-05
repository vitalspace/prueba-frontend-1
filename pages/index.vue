<script>
import { getPokemon } from "../services/PokemonServices";

export default {
  data() {
    return {
      pokemon: "pikachu",
      show: false,
      character: {},
      error: {},
    };
  },

  methods: {
    submit() {
      getPokemon(this.pokemon)
        .then((res) => {
          this.show = true;

          this.character = {
            id: res.data.id,
            name: res.data.name,
            sprites: res.data.sprites,
            move: res.data.move,
          };

          this.$el.style.setProperty(
            "--background-image-url",
            `url(${res.data.sprites[0]})`
          );
        })
        .catch((err) => {
          this.error = {
            status: true,
            message: `pokemon ${this.pokemon} does not exist`,
          };
          setTimeout(() => (this.error.status = false), 5000);
        });
    },
  },

  mounted() {
    this.submit();
  },
};
</script>

<template>
  <div
    class="d-flex flex-column gap-2 justify-content-center align-items-center w-100 vh-100 bg-1 overflow-hidden"
  >
    <div v-if="show">
      <Card :character="character" :error="error" />
    </div>

    <div v-if="show" class="d-flex" style="width: 20em">
      <input
        v-model="pokemon"
        class="form-control"
        type="text"
        placeholder="Pikachu"
      />
      <button :disabled="!pokemon" @click="submit" class="btn btn-primary">
        Search
      </button>
    </div>
    <div v-else>
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-1 {
  position: relative;
  width: 100vh;
}

.bg-1::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: var(--background-image-url);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; /* Centra la imagen en el contenedor */
  filter: blur(100px);
  z-index: -1;
}
</style>
