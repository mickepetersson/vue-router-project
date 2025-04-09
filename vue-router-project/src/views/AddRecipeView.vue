<template>
    <div>
        <form @submit.prevent="addRecipe">
            <h2>Add Recipe</h2>
            <button type="submit">Add Recipe</button>

        </form>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const addRecipe = () => {
    // Logic to add a recipe
    console.log("Recipe added!");
    router.push({ name: 'recipe', params: { id: 2 } }); // Redirect to the recipe page after adding
    // Redirect to home after adding the recipe
};
</script>