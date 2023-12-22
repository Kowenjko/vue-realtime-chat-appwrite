import { ref } from 'vue'
import { storeToRefs } from 'pinia'

import { MessageI } from '@/api/interfaces'
import { filterObject } from '@/helpers/ArrayHelper'
import { useChatStore } from '@/stores/useChatStore'

import {
	getMessages,
	createMessage,
	deleteMessage,
	subscribeMessage,
} from '@/api/messages/MessageServices'

enum EnumAction {
	'create' = 'create',
	'delete' = 'delete',
	'update' = 'update',
}

export const useMessage = async () => {
	const messages = ref<MessageI[]>([])
	const body = ref<string>('')

	const chatStore = useChatStore()
	const { isLoading, userInfo } = storeToRefs(chatStore)

	const { documents } = (await getMessages()) as any
	messages.value = documents

	const changeMessages = async (action: EnumAction, payload: MessageI) => {
		if (action === 'create') messages.value = [payload, ...messages.value]
		if (action === 'delete')
			messages.value = filterObject(messages.value, payload.$id as string)

		if (action === 'update') {
			const { documents } = (await getMessages()) as any
			messages.value = documents
		}
	}

	const handleSubmit = async () => {
		const payload: Partial<MessageI> = {
			user_id: userInfo.value?.$id || '',
			username: userInfo.value?.name || '',
			body: body.value,
		}

		const response = await createMessage(payload, userInfo.value?.$id!)
		console.log('RESPONSE:', response)
		body.value = ''
	}

	const handleDelete = async (id: string) => await deleteMessage(id)

	const unsubscribe = subscribeMessage(changeMessages)

	const checkDeleteMessage = (message: MessageI) =>
		message.$permissions.includes(`delete(\"user:${userInfo.value?.$id}\")`)

	return {
		isLoading,
		handleSubmit,
		body,
		messages,
		handleDelete,
		unsubscribe,
		checkDeleteMessage,
	}
}
