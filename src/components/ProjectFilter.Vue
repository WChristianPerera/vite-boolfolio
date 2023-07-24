<script>
export default {
	data() {
		return {
			categoryId: null,
		};
	},
	props: {
		categories: {
			type: Array,
			required: true,
		},
	},
	watch: {
		categories() {
			this.categoryId = this.categories.length
				? this.categories[0].id
				: null;
		},
	},
};
</script>

<template>
	<form class="my-5">
		<h3>Filtra posts</h3>
		<label for="category">Category</label>
		<select
			class="form-select"
			id="category"
			@change="$emit('changeCategory', categoryId)"
			v-model="categoryId"
		>
			<option
				v-for="category in categories"
				:key="category.id"
				:value="category.id"
			>
				{{ category.name }}
			</option>
		</select>
	</form>
</template>

<style></style>