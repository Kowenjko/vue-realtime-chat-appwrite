<script setup lang="ts">
import { documentsGet } from '@/api/AppwriteServices'

const { documents } = await documentsGet()

console.log(documents)
</script>
<template>
	<div>
		Home Page

		<ul>
			<li v-for="document in documents" :key="document.$id">
				{{ document.body }}
			</li>
		</ul>
	</div>
</template>

<style scoped></style>
