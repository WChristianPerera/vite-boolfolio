<script>
import { store } from '../store';

export default {
	data() {
		return {
			store,
		};
	},
	// props: ['objPost'],
	// props: {
	// 	objPost: Object,
	// },
	props: {
		objPost: {
			type: Object,
			required: true,
		},
	},
	methods: {
		getImageUrl(image) {
			return image
				? this.store.baseUrl + 'storage/' + image
				: this.store.baseUrl + 'storage/default.jpg';
		},
	},
};
</script>

<template>
	<div class="card h-100">
		<img
			:src="getImageUrl(objPost.image)"
			class="card-img-top"
			:alt="objPost.title"
		/>
		<div class="card-body d-flex flex-column">
			<h5 class="card-title">{{ objPost.title }}</h5>
			<p>Category: {{ objPost.category.name }}</p>
			<p class="card-text">text</p>
			<router-link
				:to="{ name: 'posts.show', params: { slug: objPost.slug } }"
				class="btn btn-primary mt-auto"
				>View</router-link
			>
		</div>
	</div>
</template>

<style></style>