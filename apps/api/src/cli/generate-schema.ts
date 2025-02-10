import { mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { schema } from '@/schema';
import { lexicographicSortSchema, printSchema } from 'graphql';
import { exit } from 'process';

const schemaAsString = printSchema(lexicographicSortSchema(schema));
console.log(schemaAsString);

const schemaDirectory = join(dirname(fileURLToPath(import.meta.url)), '../generated');
console.log(schemaDirectory);

mkdirSync(schemaDirectory, { recursive: true });
writeFileSync(join(schemaDirectory, 'schema.graphql'), schemaAsString);

exit(0);
