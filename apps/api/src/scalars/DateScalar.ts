import { builder } from '@/builder';
import { DateResolver } from 'graphql-scalars';

builder.addScalarType('Date', DateResolver);
