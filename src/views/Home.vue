<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { getMessages, isLoadingMessage } from '@/api/messages/MessageServices'
import { MessageI } from '@/api/interfaces'
import { filterObject } from '@/helpers/ArrayHelper'
import { useChatStore } from '@/stores/useChatStore'

const chatStore = useChatStore()
const { isLoading } = storeToRefs(chatStore)

const messages = ref<MessageI[]>([])

enum EnumAction {
	'create' = 'create',
	'delete' = 'delete',
}

const { documents } = await getMessages()

messages.value = documents

console.log(documents)

const changeMessages = (action: EnumAction, payload: unknown) => {
	if (action === 'create') messages.value = [...messages.value, payload]
	if (action === 'delete')
		messages.value = filterObject(messages.value, payload.$id)
}
</script>
<template>
	<main class="container">
		<div class="room--container">
			{{ isLoading }}
			<ul>
				<li
					v-for="message in messages"
					:key="message.$id"
					class="messages--wrapper"
				>
					<p class="message--header">
						<small class="message-timestamp">{{ message.$createdAt }}</small>
					</p>
					<div class="message--body">
						<span>{{ message.body }}</span>
					</div>
				</li>
			</ul>
		</div>
	</main>
</template>

<style scoped></style>
@/api/messages/AppwriteServices
