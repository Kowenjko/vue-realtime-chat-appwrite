import { ref } from 'vue'
import { Models } from 'appwrite'

import {
	listDocuments,
	createDocument,
	deleteDocument,
	subscribe,
} from '@/api/messages/MessageRepository'
import { handleException } from '@/api/helpers/HandleException'
import { useChatStore } from '@/stores/useChatStore'
import { MessageI } from '@/api/interfaces'

export const getMessages =
	async (): Promise<Models.DocumentList<Models.Document> | void> => {
		const { setIsLoading } = useChatStore()
		setIsLoading('get', true)
		try {
			return await listDocuments()
		} catch (e) {
			handleException(e)
		} finally {
			setIsLoading('get', false)
		}
	}

export const createMessage = async (
	payload: Partial<MessageI>,
	userId: string
): Promise<Models.Document | void> => {
	const { setIsLoading } = useChatStore()
	setIsLoading('create', true)
	try {
		return await createDocument(payload, userId)
	} catch (e) {
		handleException(e)
	} finally {
		setIsLoading('create', false)
	}
}

export const deleteMessage = async (messageId: string): Promise<{} | void> => {
	const { setIsLoading } = useChatStore()
	setIsLoading('delete', true)
	try {
		return await deleteDocument(messageId)
	} catch (e) {
		handleException(e)
	} finally {
		setIsLoading('delete', false)
	}
}

export const subscribeMessage = (callback: Function) => {
	return subscribe(callback)
}
