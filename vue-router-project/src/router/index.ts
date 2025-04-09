import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavoritesView from '@/views/FavoritesView.vue'
import AddRecipeView from '@/views/AddRecipeView.vue'
import RecipeView from '@/views/RecipeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // alias: ['/home', '/']
    },
    {
      //option 2 for alias: redirect
      path: '/home',
      redirect: '/',
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView
    },
    {
      path: '/addRecipe',
      name: 'addRecipe',
      component: AddRecipeView
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: RecipeView,
      // alias for recipes with alternative name
      alias: '/meal/:id',
    },
    {
      //handle 404
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    }
  ]
})

export default router
