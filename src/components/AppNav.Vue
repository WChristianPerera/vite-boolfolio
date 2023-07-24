<script>
import { store } from '../store';

export default {
	data() {
		return {
			searchString: '',
			store,
		};
	},
	methods: {
		executeSearch() {
			this.store.search = this.searchString;
			this.$router.push({
				name: 'posts.index',
				query: { q: this.searchString },
			});
		},
	},
	// TODO: pulire il campo di ricerca quando cambiamo pagina
	// updated() {
	// 	this.searchString = new URLSearchParams(window.location.search).get('q');
	// },
};
</script>

<template>
	<nav class="navbar navbar-expand-lg bg-body-tertiary">
		<div class="container-fluid">
			<router-link :to="{ name: 'home' }" class="navbar-brand"
				>Boolpress</router-link
			>

			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link :to="{ name: 'posts.index' }" class="nav-link"
							>Posts</router-link
						>
					</li>
					<li class="nav-item">
						<router-link :to="{ name: 'about' }" class="nav-link"
							>About</router-link
						>
					</li>
					<li class="nav-item">
						<router-link :to="{ name: 'contact' }" class="nav-link"
							>Contact</router-link
						>
					</li>
				</ul>
				<form class="d-flex" role="search" @submit.prevent="executeSearch">
					<input
						class="form-control me-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
						name="q"
						v-model="searchString"
					/>
					<button class="btn btn-outline-success" type="submit">
						Search
					</button>
				</form>
			</div>
		</div>
	</nav>
</template>

<style></style>