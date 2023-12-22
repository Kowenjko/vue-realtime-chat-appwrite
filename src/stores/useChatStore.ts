import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

import { UserI } from '@/api/interfaces'

type ActionT = 'get' | 'create' | 'delete' | 'auth'
interface LoadingI {
	status: boolean
	action: ActionT
}

export const useChatStore = defineStore('chatStore', () => {
	const isLoading = reactive<LoadingI>({ status: false, action: 'get' })

	const userInfo = ref<UserI | null>(null)

	const setIsLoading = (action: ActionT, status: boolean) => {
		isLoading.status = status
		isLoading.action = action
	}

	const setUserInfo = (value: UserI | null) => (userInfo.value = value)

	return { isLoading, setIsLoading, userInfo, setUserInfo }
})
