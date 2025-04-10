<template>
    <main>
        <h1>Recipe Book</h1>
        <div>
            <input type="text" placeholder="Search recipes..." v-model="searchQuery" />
        </div>
        <nav v-if="filteredRecipes.length > 0">
            <ul>
                <li v-for="recipe in filteredRecipes" :key="recipe.id">
                    <RouterLink :to="{ name: 'recipe', params: { id: 1 } }">{{ recipe.name }}</RouterLink>
                </li>
            </ul>
        </nav>
        <div>
            <p>No recipes found.</p>
        </div>

    </main>
</template>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe';
import { RouterLink } from 'vue-router';
import { computed, ref } from 'vue';

const searchQuery = ref('');
const filteredRecipes = computed(() => 
    recipeStore.recipes.filter(
        recipe => recipe.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
);

const recipeStore = useRecipeStore();

</script>