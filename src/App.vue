<script setup lang="ts">
import { onMounted } from 'vue'
import { accountDetails } from '@/api/authentication/AuthServices'
import LayoutsDefault from './layouts/Default.vue'

onMounted(async () => await accountDetails())
</script>

<template>
	<suspense>
		<layouts-default>
			<router-view> </router-view>
		</layouts-default>
	</suspense>
</template>

<style scoped></style>
