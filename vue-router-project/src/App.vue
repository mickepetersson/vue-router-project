<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/addRecipe">Add Recipe</RouterLink>
      <RouterLink to="/favorites"> Favorites</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
