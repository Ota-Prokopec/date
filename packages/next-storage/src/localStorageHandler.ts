export const getLocalStorageData = () => {
	const keys = Array.from({ length: localStorage.length })
		.map((_item, index) => localStorage.key(index))
		.filter((key) => typeof key === 'string')

	return keys
		.map((key) => {
			if (!key) throw new Error('key is not defined into localstorage')
			const value = localStorage.getItem(key)

			//try and catch - because the value can be string, as "ahoj" is, but also array in string as "["ahoj"]" is - so i have to parse and find out if i can parse, if there is object in string or only string
			try {
				return { [key]: value ? JSON.parse(value) : null }
			} catch (error) {
				return { [key]: value ? value : null }
			}
		})

		.reduce(
			(object, currentObject) => ({ ...currentObject, ...object }),
			{} as { [x: string]: string },
		)
}

export const setLocalStorageItem = (key: string, value: string) =>
	localStorage.setItem(key, JSON.stringify(value))

export const removeLocalStorageItem = (key: string) => localStorage.removeItem(key)
