import { ref } from 'vue'
import { Models } from 'appwrite'
import {
	getAccount,
	createEmailSession,
	createAccount,
} from '@/api/authentication/AuthRepository'
import { handleException } from '@/api/helpers/HandleException'

const isLoadingAuth = ref<boolean>(false)

export const accountDetails =
	async (): Promise<Models.User<Models.Preferences> | void> => {
		isLoadingAuth.value = true
		try {
			return await getAccount()
		} catch (e) {
			handleException(e)
		} finally {
			isLoadingAuth.value = false
		}
	}

export const loginUser = async (email: string, password: string) => {
	isLoadingAuth.value = true
	try {
		await createEmailSession(email, password)
	} catch (e) {
		handleException(e)
	} finally {
		isLoadingAuth.value = false
	}
}

export const registerUser = async (
	email: string,
	password: string,
	name: string
) => {
	isLoadingAuth.value = true
	try {
		await createAccount(email, password, name)
	} catch (e) {
		handleException(e)
	} finally {
		isLoadingAuth.value = false
	}
}
