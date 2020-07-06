<template>
	<div id='signup'>
		<div class='signup-form'>
			<form @submit.prevent='onSubmit'>
				<div class='input'>
					<label for='email'>Mail</label>
					<input
						type='email'
						id='email'
						v-model='email'
					>
				</div>
				<div class='input'>
					<label for='name'>Your Name</label>
					<input
						type='text'
						id='name'
						v-model.number='name'
					>
				</div>
				<div class='input'>
					<label for='password'>Password</label>
					<input
						type='password'
						id='password'
						v-model='password'
					>
				</div>

				<div class='submit'>
					<button type='submit'>Submit</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SignUp',
		data: () => ({
			email: '',
			name: '',
			password: ''
		}),
		methods: {
			onSubmit() {
				const formData = {
					email: this.email,
					name: this.name,
					password: this.password
				}
				console.log(formData)
				this.$store.dispatch('signup', formData)
			}
		}
	}
</script>

<style lang='sass' scoped>
.signup-form
	margin: 30px auto
	padding: 20px
	width: 320px
	border: thin solid #eee
	box-shadow: 0 2px 3px #ccc

.input
	margin: 10px auto

	label
		display: block
		margin-bottom: 6px
		color: #4e4e4e

	input
		padding: 6px 12px
		width: 100%
		font: inherit
		border-radius: 7px
		border: thin solid #c3cc
		box-sizing: border-box

		&:focus
			outline: none
			border-color: #521751
			background-color: #eee

	select
		font: inherit
		border: 1px solid #ccc

.input.inline label
	display: inline

.input.inline input
	width: auto

.hobbies button
	border: 1px solid #521751
	background: #521751
	color: white
	padding: 6px
	font: inherit
	cursor: pointer

	&:hover,
	&:active
		background-color: #8d4288

.hobbies input
	width: 90%

.submit button
	cursor: pointer
	padding: 10px 20px
	font: inherit
	color: #521751
	border-radius: 18px
	border: thin solid #521751

	&:hover,
	&:active
		color: white
		background-color: #521751

	&[disabled],
	&[disabled]:hover,
	&[disabled]:active
		cursor: not-allowed
		color: #ccc
		border-color: #ccc
		background-color: transparent
</style>
