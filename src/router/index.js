import Vue from 'vue'
import VueRouter from 'vue-router'

// The store is imported because of the token that’ll determine the logged in state of the user
import store from '../store'

Vue.use(VueRouter)

const routes = [
	{
		name: 'WelcomePage',
		path: '/',
		component: () => import('@/components/welcome/Welcome.vue')
	},
	{
		name: 'SignUpPage',
		path: '/signup',
		component: () => import('@/components/auth/SignUp.vue')
	},
	{
		name: 'SignInPage',
		path: '/signin',
		component: () => import('@/components/auth/SignIn.vue')
	},
	{
		name: 'DashboardPage',
		path: '/dashboard',
		component: () => import('@/components/dashboard/Dashboard.vue'),
		beforeEnter(to, from, next) {
			if (store.state.Auth.idToken) { next() }
			else { next('/signin') }
		}
	},
	{ path: '*', redirect: '/' }
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
