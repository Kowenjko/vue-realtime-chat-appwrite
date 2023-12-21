import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

type ActionT = 'get' | 'create' | 'delete' | 'auth'
interface LoadingI {
	status: boolean
	action: ActionT
}

export const useChatStore = defineStore('chatStore', () => {
	const isLoading = reactive<LoadingI>({ status: false, action: 'get' })

	const setIsLoading = (action: ActionT, status: boolean) => {
		isLoading.status = status
		isLoading.action = action
	}

	return { isLoading, setIsLoading }
})
