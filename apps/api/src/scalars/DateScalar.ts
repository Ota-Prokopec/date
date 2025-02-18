import { builder } from '@/builder'
import { DateTimeISOResolver } from 'graphql-scalars'
import { DateScalar, TimeScalar, DateTimeScalar } from 'graphql-date-scalars'

builder.addScalarType('Date', DateTimeISOResolver)
