<script setup lang="ts">
import { reactive, watch } from 'vue'
import { useRouter } from 'vue-router'

import { useAuthUser } from '@/composables/useAuthUser'
import { AuthI } from '@/api/interfaces'

const router = useRouter()

const { handleUserLogin, userInfo } = await useAuthUser()

const forms = reactive<AuthI>({ email: '', password: '' })

watch(userInfo, (value) => (value ? router.push('/') : router.push('/login')))
</script>
<template>
	<div class="auth--container">
		<div class="form--wrapper">
			<form @submit.prevent="handleUserLogin(forms)">
				<div class="field--wrapper">
					<label>Email:</label>
					<input
						required
						type="email"
						name="email"
						placeholder="Enter your email..."
						v-model.trim="forms.email"
					/>
				</div>

				<div class="field--wrapper">
					<label>Password:</label>
					<input
						required
						type="password"
						name="password"
						placeholder="Enter password..."
						v-model.trim="forms.password"
					/>
				</div>

				<div class="field--wrapper">
					<input type="submit" value="Login" class="btn btn--lg btn--main" />
				</div>
			</form>

			<p>
				Dont have an account? Register
				<router-link to="/register">here</router-link>
			</p>
		</div>
	</div>
	>
</template>
