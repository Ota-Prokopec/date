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
    Socials: `{instagram: {
        profileId: string;
        link: string;
  }}`,
  },
}

const config: CodegenConfig = {
  schema: '../api/src/generated/schema.graphql',
  documents: './src/graphql/gql/**/*.graphql',

  generates: {
    './src/graphql/generated/typescript.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      config: codegenConfigConfig,
    },
    './src/graphql/generated/apollo.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        ...codegenConfigConfig,
        withHooks: true,
      },
    },
  },
}

export default config
