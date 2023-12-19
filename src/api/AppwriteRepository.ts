import { databases } from '@/api/AppwriteSetup'
import { appwriteConfig } from '@/config/appwrire.js'

const { databaseID, collectionID } = appwriteConfig

export const listDocuments = async () => {
	return databases.listDocuments(databaseID, collectionID)
}
