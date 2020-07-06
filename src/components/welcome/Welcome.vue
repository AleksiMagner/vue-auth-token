<template>
	<div id='welcome'>
		<h1>Learning Vue Authentication</h1>
		<template v-if='auth'>
			<h2>Home page</h2>
		</template>

		<template v-else>
			<p>Here you go!</p>
			<div class='cta'>
				<router-link to='/signup'>Sign Up</router-link>
				<router-link to='/signin'>Sign In</router-link>
			</div>
		</template>
	</div>
</template>

<script>
	export default {
		name: 'Welcome',
		computed: {
			auth() { return this.$store.getters.ifAuthenticated }
		}
	}
</script>

<style lang='sass' scoped>
#welcome
	margin: auto
	width: 80%

h1,
h2,
p
	text-align: center

.cta
	margin: auto
	width: 300px
	text-align: center

.cta a
	display: inline-block
	margin: 10px
	padding: 10px
	width: 100px
	text-decoration: none
	color: #521751
	border-radius: 3px
	border: thin solid #521751
	box-sizing: border-box

.cta a:hover,
.cta a:active
	color: white
	background-color: #521751
</style>
