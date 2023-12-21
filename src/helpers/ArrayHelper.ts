export const addObjectAtIndex = (collection: any, index: number, data: any) => {
	collection.splice(index, 0, data)
}

export const removeObjectAtIndex = (collection: any, index: number) => {
	collection.splice(index, 1)
}

export const getIndexById = (collection: any, id: string) => {
	return collection.findIndex((elem: any) => elem.id === id)
}

export const filterObject = (collection: any, id: string) => {
	return collection.filter((elem: any) => elem.id === id)
}
