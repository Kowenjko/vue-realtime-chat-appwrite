<script setup lang="ts">
import { reactive } from 'vue'
import { useAuthUser } from '@/composables/useAuthUser'
import { AuthI } from '@/api/interfaces'

const { handleRegister } = await useAuthUser()

const forms = reactive<AuthI>({
	email: '',
	password: '',
	name: '',
	passwordCurrent: '',
})
</script>
<template>
	<div class="auth--container">
		<div class="form--wrapper">
			<form @submit.prevent="handleRegister(forms)">
				<div class="field--wrapper">
					<label>Name:</label>
					<input
						required
						type="text"
						name="name"
						placeholder="Enter your name..."
						v-model.trim="forms.name"
					/>
				</div>

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
						name="password1"
						placeholder="Enter a password..."
						v-model.trim="forms.password"
					/>
				</div>

				<div class="field--wrapper">
					<label>Confirm password:</label>
					<input
						required
						type="password"
						name="password2"
						placeholder="Confirm your password..."
						v-model.trim="forms.passwordCurrent"
					/>
				</div>

				<div class="field--wrapper">
					<input class="btn btn--lg btn--main" type="submit" value="Register" />
				</div>
			</form>

			<p>
				Already have an account? Login
				<router-link to="/login">here</router-link>
			</p>
		</div>
	</div>
</template>

<style scoped></style>
