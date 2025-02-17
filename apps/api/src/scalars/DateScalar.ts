import { builder } from '@/builder'
import { DateTimeISOResolver } from 'graphql-scalars'

builder.addScalarType('Date', DateTimeISOResolver)
