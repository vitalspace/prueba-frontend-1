<script lang="ts">
export default {
  props: {
    character: {
      type: Object,
      required: true,
    },
    error: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="card p-4" style="width: 20rem">
    <div class="d-flex justify-content-center">
      <div v-for="(item, index) in character.sprites" :key="index">
        <img :src="item" alt="" />
      </div>
    </div>
    <div class="card-body row justify-content-center align-items-center">
      <div class="d-flex border justify-content-center">
        <h1>{{ character.name }}</h1>
        <span>{{ character.id }}</span>
      </div>
      <p class="ustify-content-center text-center">
        Move: <span class="fw-bold"> {{ character.move }}</span>
      </p>
      <div v-if="error.status">
        <p class="text-danger text-center">{{ error.message }}</p>
      </div>
    </div>
  </div>
</template>
