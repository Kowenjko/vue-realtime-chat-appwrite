<script setup lang="ts">
import { onUnmounted } from 'vue'

import Header from '@/components/Header.vue'
import Pulse from '@/components/icons/Pulse.vue'

import { ArchiveBoxXMarkIcon } from '@heroicons/vue/24/solid'
import { useMessage } from '@/composables/useMessage'

const { isLoading, handleSubmit, body, messages, handleDelete, unsubscribe, checkDeleteMessage } =
	await useMessage()	

onUnmounted(() => unsubscribe())
</script>
<template>
	<div class="container">
		<Header />		
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
					<div class="loading-wrapper" :class="{active: isLoading?.status&&isLoading?.action!=='auth'}">
						<Pulse class="loading"/>
						<span>{{ isLoading?.action }} message</span>
					</div>
					<button class="btn btn--secondary" style="align-self: flex-end;" type="submit" > Send </button>
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
						<div>
							<span>{{
								message?.username ? message.username : 'Anonymous user'
							}}</span>
							<small class="message-timestamp">{{
								new Date(message.$createdAt).toLocaleString()
							}}</small>
						</div>
						<ArchiveBoxXMarkIcon
						v-if="checkDeleteMessage(message)"
							class="delete--btn"
							@click.prevent="handleDelete(message.$id!)"
						/>
					</p>

					<div class="message--body">
						<span>{{ message.body }}</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>

.loading-wrapper{
	display: flex;
	align-items: center;
	opacity: 0;
	gap: 10px;
}
.loading{
	width: 30px;
}

.active{
	opacity: 1;
}
</style>
