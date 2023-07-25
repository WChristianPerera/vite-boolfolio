import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import PostsIndex from './pages/PostsIndex.vue';
import AppContact from './pages/AppContact.vue';
import AppAbout from './pages/AppAbout.vue';
import PostsShow from './pages/PostsShow.vue';
import App404 from './pages/App404.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: AppHome,
		},
		{
			path: '/about',
			name: 'about',
			component: AppAbout,
		},
		{
			path: '/contact',
			name: 'contact',
			component: AppContact,
		},
		{
			path: '/posts',
			name: 'posts.index',
			component: PostsIndex,
		},
		{
			path: '/posts/:slug',
			name: 'posts.show',
			component: PostsShow,
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'page404',
			component: App404,
		},

	]
});

export { router };