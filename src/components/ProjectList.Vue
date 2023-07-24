<script>
import axios from 'axios';
import { store } from '../store';
import PostFilter from './PostFilter.vue';
import PostCard from './PostCard.vue';

export default {
	components: {
		PostFilter,
		PostCard,
	},
	data() {
		return {
			arrPosts: [],
			arrCategories: [],
			categoryId: null,
			currentPage: 1,
			nPages: 0,
			store,
		};
	},
	methods: {
		toPrevPage() {
			this.currentPage != 1 ? this.currentPage-- : null;
		},
		toNextPage() {
			this.currentPage != this.nPages ? this.currentPage++ : null;
		},
		getPosts() {
			axios
				.get(this.store.baseUrl + 'api/posts', {
					params: {
						page: this.currentPage,
						q: this.store.search,
						category: this.categoryId,
					},
				})
				.then(response => {
					this.arrPosts = response.data.results.data;
					this.nPages = response.data.results.last_page;
				});
		},
		getCategories() {
			axios.get(this.store.baseUrl + 'api/categories').then(response => {
				this.arrCategories = response.data.results;
			});
		},
		manageChangeCategory(categoryId) {
			this.categoryId = categoryId;
			this.getPosts();
		},
	},
	created() {
		// richiesta dati al server
		this.getPosts();
		this.getCategories();
	},
	watch: {
		currentPage() {
			this.getPosts();
		},
		'store.search'() {
			this.getPosts();
		},
	},
};
</script>

<template>
	<PostFilter
		:categories="arrCategories"
		@changeCategory="manageChangeCategory($event)"
	/>

	<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mb-5">
		<div class="col" v-for="post in arrPosts" :key="post.id">
			<PostCard :objPost="post" />
		</div>
	</div>

	<nav>
		<ul class="pagination">
			<li class="page-item" :class="{ disabled: currentPage == 1 }">
				<a class="page-link" @click="toPrevPage">Previous</a>
			</li>

			<li
				v-for="page in nPages"
				:key="page"
				class="page-item"
				:class="{ active: page == currentPage }"
			>
				<a class="page-link" href="#" @click="currentPage = page">
					{{ page }}
				</a>
			</li>

			<li class="page-item" :class="{ disabled: currentPage == nPages }">
				<a class="page-link" href="#" @click="toNextPage">Next</a>
			</li>
		</ul>
	</nav>
</template>

<style></style>