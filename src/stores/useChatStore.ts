import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useChatStore = defineStore('chatStore', () => {
	const isLoading = ref<boolean>(false)

	const setIsLoading = (value: boolean) => (isLoading.value = value)

	return { isLoading, setIsLoading }
})
