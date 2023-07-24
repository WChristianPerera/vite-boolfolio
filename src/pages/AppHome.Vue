<script>
import axios from 'axios';
import { store } from '../store';

export default {
	data() {
		return {
			store,
			arrPosts: [],
		};
	},
	created() {
		axios.get(this.store.baseUrl + 'api/posts/random').then(response => {
			this.arrPosts = response.data.results;
		});
	},
};
</script>

<template>
	<div class="row row-cols-3 g-0">
		<div class="col" v-for="post in arrPosts" :key="post.id">
			<router-link
				class="d-block w-100 h-100"
				:to="{ name: 'posts.show', params: { slug: post.slug } }"
			>
				<img
					class="w-100 h-100"
					:src="store.getImageUrl(post.image)"
					:alt="post.title"
				/>
			</router-link>
		</div>
	</div>
</template>

<style scoped>
/* TODO: fix style of grid (center and fill the screen with 100vh) */

.row {
	height: 70vh;
}

.col {
	height: calc(100% / 3);
}

img {
	object-fit: cover;
}
</style>