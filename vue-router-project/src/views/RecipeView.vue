<template>
  <div>
    <!-- Recipe plus the id, picked from route param /recipe/# -->
    Recipe {{ $route.params.id }}
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

console.log(route.params.id); // Access the route parameter 'id'
</script>