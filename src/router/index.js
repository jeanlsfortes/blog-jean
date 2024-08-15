import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
	history: createWebHistory('/blog-jean'),
	routes: [
		{
			path:'/',
			name:'Home',
			component: HomeView
		},
		{
			path: '/about',
			name: 'About',
			component: () => import('../views/AboutView.vue')
		},
		{
			path: '/certificates',
			name: 'Certificates',
			component: () => import('../views/CertificatesView.vue')
		},
		{
			path: '/project',
			name: 'Projects',
			component: () => import('../views/ProjectView.vue')
		},
		{
			path: '/settings',
			name: 'Settings',
			component: () => import('../views/SettingsView.vue')
		}

	],
})

export default router