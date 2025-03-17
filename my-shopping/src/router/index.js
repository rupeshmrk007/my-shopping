import { createRouter, createWebHistory } from 'vue-router';
import ProductPage from '@/components/ProductCatalog.vue';


const routes = [
  { path: '/product-shopping/', name: 'ProductPage', component: ProductPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
