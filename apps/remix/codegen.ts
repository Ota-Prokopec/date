import type { CodegenConfig } from '@graphql-codegen/cli';

const codegenConfigConfig: CodegenConfig['config'] = {
  maybeValue: 'T | null | undefined',
  scalars: {
    Coords: '{lat: number, lng: number}',
    GraphQLHealth: '{ok: boolean}',
    Gender: '"male"|"female"',
    Upload: 'File',
  },
};

const config: CodegenConfig = {
  schema: 'http://localhost:4444/api/graphql',
  documents: './app/graphql/gql/**/*.graphql',

  generates: {
    './app/graphql/generated/apollo-graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
        {
          add: {
            content: "import { gql } from '@apollo/client/core/index';",
          },
        },
      ],
      config: {
        ...codegenConfigConfig,
        withHooks: true,
      },
    },
    './app/graphql/generated/urql-graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
      config: codegenConfigConfig,
    },
    './app/graphql/generated/typescript-vanila.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      config: {
        ...codegenConfigConfig,
      },
    },
  },
  hooks: {
    afterAllFileWrite: [
      'sed -i -e "/import { gql } from \'@apollo\\/client\';/d" ./app/graphql/generated/apollo-graphql.ts',
    ],
  },
};

export default config;
