import { Models } from 'appwrite'
import { account, ID } from '@/api/AppwriteSetup'

/**
 *Logout user
 * @returns {Promise}
 */

export const deleteSession = async (): Promise<{}> => {
	return await account.deleteSession('current')
}
/**
 *Get user
 * @returns {Promise}
 */

export const getAccount = async (): Promise<
	Models.User<Models.Preferences>
> => {
	return await account.get()
}

/**
 * Login user and get account
 * @param email
 * @param password
 * @returns {Promise}
 */

export const createEmailSession = async (
	email: string,
	password: string
): Promise<Models.Session> => {
	return await account.createEmailSession(email, password)
}

/**
 * Register user and get account
 * @param email
 * @param password
 * @param name
 * @returns {Promise}
 */

export const createAccount = async (
	email: string,
	password: string,
	name: string
): Promise<Models.User<Models.Preferences>> => {
	return await account.create(ID.unique(), email, password, name)
}
