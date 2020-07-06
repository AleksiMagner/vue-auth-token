<template>
	<header id='header'>
		<div class='logo'>
			<router-link to='/'>Vue Authenticate</router-link>
		</div>

		<nav>
			<ul>
				<template v-if='auth'>
					<li>
						<router-link to='/dashboard'>Dashboard</router-link>
					</li>
					<li>
						<ul @click='onLogout()'>Log Out</ul>
					</li>
				</template>

				<template v-else>
					<li>
						<router-link to='/signup'>Register</router-link>
					</li>
					<li>
						<router-link to='/signin'>Log In</router-link>
					</li>
				</template>
			</ul>
		</nav>
	</header>
</template>

<script>
	export default {
		name: 'Header',
		computed: {
			auth() { return this.$store.getters.ifAuthenticated }
		},
		methods: {
			onLogout() { this.$store.dispatch('logout') }
		}
	}
</script>

<style lang='sass' scoped>
*
	cursor: pointer

#header
	display: flex
	flex-flow: row
	justify-content: space-between
	align-items: center
	padding: 0 20px
	height: 56px
	background-color: #747080

.logo
	font-weight: bold
	color: white

	a
		text-decoration: none
		color: white

nav
	height: 100%

ul
	display: flex
	flex-flow: row
	align-items: center
	margin: 0
	padding: 0
	height: 100%
	list-style: none

li
	margin: 0 16px

	a
		text-decoration: none
		color: black

		&:hover,
		&:active,
		&.router-link-active
			color: #fa9f
</style>
