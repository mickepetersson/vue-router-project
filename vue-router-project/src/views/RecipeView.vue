<template>
  <div>
    <!-- Recipe plus the id, picked from route param /recipe/# -->
    Recipe {{ $route.params.id }}
  </div>
  <nav>
    <ul>
      <li>
        <RouterLink :to="{ name: 'recipe', params: { id: 1 } }">Recipe 1</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'recipe', params: { id: 2 } }">Recipe 3</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'recipe', params: { id: 3 } }">Recipe 4</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { onMounted } from 'vue';
import { useRoute, RouterLink } from 'vue-router';

const route = useRoute();

console.log(route.params.id); // Access the route parameter 'id'

// onMounted(() => {
//   // Logic to fetch the recipe based on the id
//   console.log('Fetching recipe with id:', route.params.id);
// });
//added a getter function to get the recipe id, since the id is not reactive
watch(() => route.params.id, () => console.log('fetching inside watch:', route.params.id));
// You can use the id to fetch the recipe data from an API or a store
</script>