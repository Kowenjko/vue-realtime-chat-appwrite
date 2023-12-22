import { databases, client } from '@/api/AppwriteSetup'

import { appwriteConfig } from '@/config/appwrire.js'
import { ID, Query, Permission, Role, Models } from 'appwrite'
import { MessageI } from '@/api/interfaces'

const { databaseID, collectionID } = appwriteConfig

const permissions = (userId: string) => [Permission.write(Role.user(userId))]

/**
 * Get all documents
 * @returns {Promise}
 */

export const listDocuments = async (): Promise<
	Models.DocumentList<Models.Document>
> => {
	return await databases.listDocuments(databaseID, collectionID, [
		Query.orderDesc('$createdAt'),
		Query.limit(100),
	])
}

/**
 * Create new Message
 * @param payload
 * @param userId
 * @returns {Promise}
 */

export const createDocument = async (
	payload: Partial<MessageI>,
	userId: string
): Promise<Models.Document> => {
	return await databases.createDocument(
		databaseID,
		collectionID,
		ID.unique(),
		payload,
		permissions(userId)
	)
}

/**
 * Delete Message
 * @param messageId
 * @returns {Promise}
 */

export const deleteDocument = async (messageId: string): Promise<{}> => {
	return await databases.deleteDocument(databaseID, collectionID, messageId)
}

/**
 * Subscribe for Message
 * @param callback
 * @returns unsubscribe
 */

export const subscribe = (callback: Function) => {
	const unsubscribe = client.subscribe(
		`databases.${databaseID}.collections.${collectionID}.documents`,
		(response) => {
			if (
				response.events.includes('databases.*.collections.*.documents.*.create')
			) {
				console.log('A MESSAGE WAS CREATED')
				callback('create', response.payload)
			}

			if (
				response.events.includes('databases.*.collections.*.documents.*.delete')
			) {
				console.log('A MESSAGE WAS DELETED!!!')
				callback('delete', response.payload)
			}
			if (
				response.events.includes('databases.*.collections.*.documents.*.update')
			) {
				console.log('A MESSAGE WAS UPDATE!!!')
				callback('update', response.payload)
			}
		}
	)

	return unsubscribe
}
