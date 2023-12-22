<script setup lang="ts">
import { useAuthUser } from '@/composables/useAuthUser'
import { useRouter } from 'vue-router'

import {
	ArrowLeftStartOnRectangleIcon,
	ArrowRightStartOnRectangleIcon,
} from '@heroicons/vue/24/solid'

const { handleLogout, userInfo } = await useAuthUser()
const router = useRouter()

const LogoutUser = async () => {
	await handleLogout()
	router.push('/login')
}
</script>
<template>
	<div id="header--wrapper">
		<div v-if="userInfo" class="user-info">
			<p>Welcome {{ userInfo?.name }}</p>
			<ArrowRightStartOnRectangleIcon
				class="header--link icon"
				@click="LogoutUser"
			/>
		</div>

		<div v-else>
			<router-link to="/">
				<ArrowLeftStartOnRectangleIcon class="header--link icon" />
			</router-link>
		</div>
	</div>
</template>

<style scoped>
.user-info {
	display: flex;
	justify-content: space-between;
	width: 100%;
}
.icon {
	width: 20px;
}
</style>
