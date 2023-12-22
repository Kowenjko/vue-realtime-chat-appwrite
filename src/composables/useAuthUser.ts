import { storeToRefs } from 'pinia'
import { useChatStore } from '@/stores/useChatStore'

import {
	loginUser,
	registerUser,
	accountDetails,
	logoutUser,
} from '@/api/authentication/AuthServices'

import { AuthI } from '@/api/interfaces'

export const useAuthUser = async () => {
	const chatStore = useChatStore()
	const { isLoading, userInfo } = storeToRefs(chatStore)

	const handleUserLogin = async (forms: AuthI) => {
		console.log('USER:', forms)

		const { email, password } = forms

		try {
			await loginUser(email, password)
			await accountDetails()
		} catch (error) {
			console.log(error)
		}
	}

	const handleLogout = async () => {
		try {
			await logoutUser()
		} catch (error) {
			console.log(error)
		}
	}

	const handleRegister = async (forms: AuthI) => {
		console.log('Handle Register triggered!', forms)

		const { name, email, password, passwordCurrent } = forms

		if (password !== passwordCurrent) {
			alert('Passwords did not match!')
			return
		}
		try {
			await registerUser(email, password, name!)
			await handleUserLogin(forms)
		} catch (error) {
			console.log(error)
		}
	}
	return { handleUserLogin, handleLogout, handleRegister, isLoading, userInfo }
}
