<template>
	<div id='app'>
		<Header/>
		<router-view/>
	</div>
</template>

<script>
	import Header from '@/components/header/Header.vue'

	export default {
		name: 'App',
		components: { Header },
		created() {
			this.$store.dispatch('autoLogin')
		}
	}
</script>

<style lang='sass'>
@import url('https://fonts.googleapis.com/css2?family=Baloo+Thambi+2&display=swap')

body,
html
	margin: 0
	font-family: 'Baloo Thambi 2', cursive
	background-color: lightyellow

#app
	-webkit-font-smoothing: antialiased
	-moz-osx-font-smoothing: grayscale
</style>
