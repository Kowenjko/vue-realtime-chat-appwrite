<script setup lang="ts">
import { onMounted } from 'vue'
import { accountDetails } from '@/api/authentication/AuthServices'

onMounted(async () => await accountDetails())
</script>

<template>
	<suspense>
		<router-view> </router-view>
	</suspense>
</template>

<style scoped></style>
