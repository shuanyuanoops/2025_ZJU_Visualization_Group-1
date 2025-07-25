import { createRouter, createWebHistory } from 'vue-router'
import byStudio from '@/components/byStudio.vue'
import Rankingpage from '@/components/rankingpage.vue';
import LineChart from '@/components/line_chart.vue'
import Home from '@/components/Home.vue'
import WordChart from '@/components/cloud_chart.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/studio',
    name: 'byStudio',
    component: byStudio
  },
  {
    path: '/rank',
    name: 'rankingpage',
    component: Rankingpage
  },
  {
    path: '/line_chart',
    name: 'LineChart',
    component: LineChart
  },
  {
    path: '/cloud_chart',
    name: 'CloudChart',
    component: WordChart
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
