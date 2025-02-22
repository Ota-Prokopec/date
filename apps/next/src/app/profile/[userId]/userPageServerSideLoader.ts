import type { GetServerSideProps } from 'next'
import { z } from 'zod'

export const userPageServerSideLoader = (async (context) => {
  const userIdProp = context.query['userId']

  console.log(context.query)

  return { props: { props: { userId: z.string().parse(userIdProp) } } }
}) satisfies GetServerSideProps<{ props: { userId: string } }>
