import { builder } from './builder';

import './schema/index';
import './resolvers';
import './scalars';

builder.queryType({});
builder.mutationType({});

export const schema = builder.toSchema();
