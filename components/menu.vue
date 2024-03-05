<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      console.log("me cumplo");
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container">
        <NuxtLink class="navbar-brand text-light" to="/">Pokedex</NuxtLink>
        <button
          @click="toggleMenu"
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          v-if="isMenuOpen"

          :class="{ 'collapse navbar-collapse': true, show: isMenuOpen }"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <NuxtLink class="nav-link text-light" to="/"
                >Search Pokemon</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-light" to="/random"
                >Get Random Pokemon</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-light" to="/filter"
                >Filter Pokemon list</NuxtLink
              >
            </li>
          </ul>
        </div>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NuxtLink class="nav-link text-light" to="/"
                >Search Pokemon</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-light" to="/random"
                >Get Random Pokemon</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-light" to="/filter"
                >Filter Pokemon list</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar-toggler-icon {
 filter: invert(1);
}
</style>