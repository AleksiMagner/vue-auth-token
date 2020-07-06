import axios from 'axios'
import router from '../router'

const baseURL = 'https://identitytoolkit.googleapis.com/v1/accounts:' // firebase API

export default {
	state: {
		idToken: null,
		userId: null
	},

	getters: {
		ifAuthenticated: state => state.idToken !== null
	},

	mutations: {
		authUser(state, userData) {
			state.idToken = userData.token
			state.userId = userData.userId
		},

		clearAuth(state) {
			state.idToken = null
			state.userId = null
		}
	},

	actions: {
		async authMethod({ commit }, { url, authData }) {
			try {
				const response = await axios.post(url, {
					email: authData.email,
					password: authData.password,
					returnSecureToken: true
				})

				console.log(response)

				commit('authUser', {
					token: response.data.idToken,
					userId: response.data.localId
				})

				localStorage.setItem('token', response.data.idToken)
				localStorage.setItem('userId', response.data.localId)

				router.push('/dashboard')
			}
			catch (error) { console.log(error) }
		},

		signup({ dispatch }, authData) {
			const url = `${baseURL}signUp?key=${process.env.VUE_APP_API_KEY}`
			dispatch('authMethod', { url, authData })
		},

		login({ dispatch }, authData) {
			const url = `${baseURL}signInWithPassword?key=${process.env.VUE_APP_API_KEY}`
			dispatch('authMethod', { url, authData })
		},

		logout({ commit }) {
			commit('clearAuth')

			localStorage.removeItem('token')
			localStorage.removeItem('userId')

			router.replace('/')
		},

		autoLogin({ commit }) {
			const token = localStorage.getItem('token')
			if (!token) { return }

			const userId = localStorage.getItem('userId')
			commit('authUser', { token, userId })
		}
	}
}
