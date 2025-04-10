<template>
    <main>
        <h1>Recipe Book</h1>
        <nav v-if="recipeStore.recipes.length > 0">
            <ul>
                <li v-for="recipe in recipeStore.recipes" :key="recipe.id">
                    <RouterLink :to="{ name: 'recipe', params: { id: 1 } }">{{ recipe.name }}</RouterLink>
                </li>

            </ul>
        </nav>

    </main>
</template>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe';
import { RouterLink } from 'vue-router';

const recipeStore = useRecipeStore();

</script>