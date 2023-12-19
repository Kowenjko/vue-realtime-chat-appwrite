import { Client, Account, Databases } from 'appwrite'
import { appwriteConfig } from '@/config/appwrire.js'

export const client = new Client()

client
	.setEndpoint(appwriteConfig.endpointUrl as string)
	.setProject(appwriteConfig.projectID as string) // Replace with your project ID

export const account = new Account(client)
export const databases = new Databases(client)
export { ID } from 'appwrite'
