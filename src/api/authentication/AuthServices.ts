import { Models } from 'appwrite'
import {
	getAccount,
	createEmailSession,
	createAccount,
	deleteSession,
} from '@/api/authentication/AuthRepository'
import { useChatStore } from '@/stores/useChatStore'
import { handleException } from '@/api/helpers/HandleException'

export const accountDetails =
	async (): Promise<Models.User<Models.Preferences> | void> => {
		const { setIsLoading, setUserInfo } = useChatStore()
		setIsLoading('auth', true)
		try {
			const userInfo = await getAccount()
			setUserInfo(userInfo)
			return userInfo
		} catch (e) {
			handleException(e)
		} finally {
			setIsLoading('auth', false)
		}
	}

export const loginUser = async (email: string, password: string) => {
	const { setIsLoading } = useChatStore()
	setIsLoading('auth', true)
	try {
		await createEmailSession(email, password)
	} catch (e) {
		handleException(e)
	} finally {
		setIsLoading('auth', false)
	}
}

export const registerUser = async (
	email: string,
	password: string,
	name: string
) => {
	const { setIsLoading } = useChatStore()
	setIsLoading('auth', true)
	try {
		await createAccount(email, password, name)
	} catch (e) {
		handleException(e)
	} finally {
		setIsLoading('auth', false)
	}
}

export const logoutUser = async () => {
	const { setIsLoading, setUserInfo } = useChatStore()
	setIsLoading('auth', true)
	try {
		await deleteSession()
		setUserInfo(null)
	} catch (e) {
		handleException(e)
	} finally {
		setIsLoading('auth', false)
	}
}
