import type { CodegenConfig } from '@graphql-codegen/cli'

const codegenConfigConfig: CodegenConfig['config'] = {
	withHooks: true,
	maybeValue: 'T | null | undefined',
	scalars: {
		BigInt: 'number',
		f: 'string',
	},
}

const config: CodegenConfig = {
	schema: '../api/src/generated/schema.graphql',
	documents: './src/graphql/gql/**/*.gql',

	generates: {
		'src/generated/urql.tsx': {
			plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
			config: codegenConfigConfig,
		},
		'./src/generated/typescript.ts': {
			plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
			config: codegenConfigConfig,
		},
		'./src/generated/apollo.ts': {
			plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
			config: {
				...codegenConfigConfig,
				withHooks: true,
			},
		},
	},
}

export default config
