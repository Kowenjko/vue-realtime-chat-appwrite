export const appwriteConfig = {
	projectID: import.meta.env.VITE_PROJECT_ID || '',
	endpointUrl: import.meta.env.VITE_ENDPOINT_URL || '',
	databaseID: import.meta.env.VITE_DATABASE_ID || '',
	collectionID: import.meta.env.VITE_COLLECTION_ID || '',
}
