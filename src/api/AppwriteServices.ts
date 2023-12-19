import { ref } from 'vue'
import { listDocuments } from '@/api/AppwriteRepository'
import { handleException } from '@/api/helpers/HandleException'

export const documentsGet = async () => {
	try {
		return await listDocuments()
	} catch (e) {
		handleException(e)
	}
}
