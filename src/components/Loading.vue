<script setup lang="ts">
import Pulse from '@/components/icons/Pulse.vue'
</script>
<template>
	<div class="loading-wrapper">
		<Pulse />
	</div>
</template>
<style scoped>
.loading-wrapper {
	display: flex;
	width: 100%;
	height: 100vh;
	justify-content: center;
	align-items: center;
}
.loading-wrapper svg {
	display: block;
	width: 50px;
}
</style>
