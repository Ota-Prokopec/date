<h1 align="center" id="title">next-super-storage</h1>

<h1>🛠️ Installation Steps:</h1>

```
npm i next-super-storage
yarn add next-super-storage
pnpm i next-super-storage
```

```ts
import { Storage } from 'next-super-storage'

export const {
	useStorageContext: useCookieStorageContext,
	useStorageValue: useCookieStorageValue,
	StorageContextProvider,
	proxyStorage: proxyCookieStorage,
	Context,
} = new Storage({
	type: 'cookies',
	zodSchema: z.object({ colorTheme: colorThemeZodSchema }),
})

const cookieStorage = proxyCookieStorage()
const colorTheme = cookieStorage['colorTheme']

const [value, setValue] = useCookieStorageValue('colorTheme')
const { setStorage, storage } = useCookieStorageContext()

useEffect(() => {
	console.log(storage.colorTheme)
}, [storage])

const onChange = () => {
	setStorage((prev) => (prev.colorTheme === 'dark' ? { colorTheme: 'light' } : {}))
	setValue('dark')
	setValue((prev) => (prev === 'dark' ? 'light' : 'dark'))
}
```

<h1>Usage with next-super-storage react provider</h1>

```tsx
<StorageContextProvider initialData={initialSSRCookies}>{children}</StorageContextProvider>
```
