<template>
    <div>
        <form @submit.prevent="addRecipe">
            <div>
                <input type="text" v-model="name" placeholder="Recipe Name" required />
            </div>
            <div>
                <input type="text" v-model="description" placeholder="Recipe Description" required />
            </div>
            <button type="submit">Add Recipe</button>

        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useRecipeStore } from '@/stores/recipe';

const store = useRecipeStore();

const name = ref('');
const description = ref('');

const router = useRouter();

const addRecipe = () => {

    const recipe = store.addRecipe({
        name: name.value,
        description: description.value,
    });
    router.push({
        name: 'recipe', 
        params: { id: recipe.id },
    }); // Redirect to the recipe page after adding
    // Redirect to home after adding the recipe
};
</script>