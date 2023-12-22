<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useChatStore } from '@/stores/useChatStore'

import Loading from '@/components/Loading.vue'
import { computed } from 'vue'

const chatStore = useChatStore()
const { isLoading } = storeToRefs(chatStore)

const showLoading = computed(
	() => isLoading.value.status && isLoading.value.action === 'auth'
)
</script>
<template>
	<Loading v-show="showLoading" />

	<main v-show="!showLoading">
		<slot />
	</main>
</template>
