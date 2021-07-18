<template>
	<div id="app">
		<h1>Hellow VueJS! App.vue title.</h1>
		<v-main-wrapper></v-main-wrapper>
	</div>
</template>

<script>
	import vMainWrapper from './components/v-main-wrapper.vue'; //Указывается v-main-wrapper без пробелов кэмелкейс

	export default {
	name: 'app',
	components: {
		vMainWrapper,
		}
	}
</script>

<style>
	#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	}
</style>
