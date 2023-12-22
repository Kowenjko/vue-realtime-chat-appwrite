export interface MessageI {
	$id?: string
	body: string
	user_id: string
	username: string
	$createdAt: string
	$permissions: string
}

export interface AuthI {
	name?: string
	email: string
	password: string
	passwordCurrent?: string
}
export interface UserI {
	name: string
	email: string
	$id: string
}
