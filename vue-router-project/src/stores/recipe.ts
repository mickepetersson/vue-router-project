import { defineStore } from 'pinia';
import { ref } from 'vue';

interface IRecipe {
  id: string;
  name: string;
  description: string;
};

type NewRecipe = Omit<IRecipe, 'id'>;

export const useRecipeStore = defineStore('recipe', () => {
  const recipes = ref<IRecipe[]>([]);

  //this will be used to add, remove and update recipes

  //addRecipe's function is to add a recipe to the recipes array which we defined above
  const addRecipe = (recipe:
    NewRecipe) => {
    const NewRecipe = {
      id: Date.now().toString(),
      ...recipe,
    };

    recipes.value.push(NewRecipe);
    return NewRecipe;
  };

  const getRecipeById = (id: string) => {
    return recipes.value.find(recipe => recipe.id === id);
  };

  const removeRecipe = (id: string) => {
    recipes.value = recipes.value.filter(recipe => recipe.id !== id);
  };

  const updateRecipe = (updatedRecipe: IRecipe) => {
    const index = recipes.value.findIndex(recipe => recipe.id === updatedRecipe.id);
    if (index !== -1) {
      recipes.value[index] = updatedRecipe;
    }
  };

  return { recipes, addRecipe, removeRecipe, updateRecipe, getRecipeById }
});
