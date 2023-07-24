<script>
import AppNav from './components/AppNav.Vue';
import AppFooter from './components/AppFooter.Vue';

export default {
	components: {
		AppNav,
		AppFooter,
	},
};
</script>

<template>
	<AppNav />

	<div class="container">
		<router-view></router-view>
	</div>

	<AppFooter />
</template>

<style lang="scss">
@import 'bootstrap/scss/bootstrap';
</style>