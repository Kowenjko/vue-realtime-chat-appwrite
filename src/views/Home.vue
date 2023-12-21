<script setup lang="ts">
import { onUnmounted } from 'vue'

import { ArchiveBoxXMarkIcon } from '@heroicons/vue/24/solid'
import { useMessage } from '@/composables/useMessage'

const { isLoading, handleSubmit, body, messages, handleDelete, unsubscribe } =
	await useMessage()

onUnmounted(() => unsubscribe())
</script>
<template>
	<main class="container">
		<div v-if="isLoading?.status">Loading ...</div>
		<div class="room--container">
			<form id="message--form" @submit.prevent="handleSubmit">
				<div>
					<textarea
						required
						maxlength="250"
						placeholder="Say something..."
						v-model="body"
					/>
				</div>

				<div class="send-btn--wrapper">
					<input class="btn btn--secondary" type="submit" value="send" />
				</div>
			</form>
			<ul style="margin-top: 20px">
				<li
					v-for="message in messages"
					:key="message.$id"
					class="messages--wrapper"
					style="padding-bottom: 10px"
				>
					<p class="message--header" style="padding-bottom: 10px">
						<small class="message-timestamp">{{
							new Date(message.$createdAt).toLocaleString()
						}}</small>
						<ArchiveBoxXMarkIcon
							class="delete--btn"
							@click.prevent="handleDelete(message.$id as string)"
						/>
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
