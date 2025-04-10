<template>
  <div>
    <h1>{{ recipe?.name }}</h1>
    <p>{{ recipe?.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useRecipeStore } from '@/stores/recipe';

const route = useRoute();
const recipeStore = useRecipeStore();

const recipe = computed(() => recipeStore.getRecipeById(route.params.id as string));


// You can use the id to fetch the recipe data from an API or a store
</script>