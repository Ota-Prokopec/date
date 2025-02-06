export const safeParseValue = (value: string | `${any}`) => {
	try {
		return JSON.parse(value)
	} catch (error) {
		return value
	}
}
