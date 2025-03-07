import type { CodegenConfig } from '@graphql-codegen/cli'

const codegenConfigConfig: CodegenConfig['config'] = {
  withHooks: true,
  maybeValue: 'T | null | undefined',
  scalars: {
    Coords: '{lat: number, lng: number}',
    File: 'File',
    Gender: '"male" | "female"',
    GraphQLHealth: '{ok: boolean}',
    Date: 'Date',
    Socials: `{instagram?: {
        profileId: string;
        link: string;
  }}`,
  },
}

const typescriptConfig = {
  plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
  config: codegenConfigConfig,
}
const apolloConfig = {
  plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
  config: {
    ...codegenConfigConfig,
    withHooks: true,
    strictScalars: true,
  },
}
const urqlConfig = {
  plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
  config: {
    ...codegenConfigConfig,
    withHooks: true,
    strictScalars: true,
  },
}
const jsonConfig = {
  plugins: ['introspection'],
  config: {
    minify: false,
    descriptions: true,
    schemaDescription: true,
  },
  hooks: {
    onWatchTriggered: 'tsx optimize-client-schema.mts',
    afterAllFileWrite: 'tsx optimize-client-schema.mts',
  },
}

const config: CodegenConfig = {
  schema: '../api/src/generated/schema.graphql',
  documents: './src/graphql/gql/**/*.graphql',

  generates: {
    './src/graphql/generated/typescript.ts': typescriptConfig,
    './src/graphql/generated/apollo.ts': apolloConfig,
    './src/graphql/generated/client-schema.json': jsonConfig,
    './src/graphql/generated/urql.ts': urqlConfig,
  },
}

export default config
