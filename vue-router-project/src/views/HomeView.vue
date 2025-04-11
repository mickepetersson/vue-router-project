<template>
    <main>
        <h1>Recipe Book</h1>
        <div>
            <input type="text" placeholder="Search recipes..." v-model="recipeStore.searchQuery" />
        </div>
        <nav v-if="recipeStore.filteredRecipes.length > 0">
            <ul>
                <li v-for="recipe in recipeStore.filteredRecipes" :key="recipe.id">
                    <RouterLink :to="{ name: 'recipe', params: { id: 1 } }">{{ recipe.name }}</RouterLink>
                </li>
            </ul>
        </nav>
        <div v-else>
            <p>No recipes found.</p>
        </div>

    </main>
</template>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe';
import { RouterLink } from 'vue-router';

const recipeStore = useRecipeStore();


</script>