'use client'

import type { GetServerSideProps } from 'next'
import { use } from 'react'

const promise = new Promise((res) => {
  setTimeout(res, 10000)
})

const TestPage = () => {
  const res = use(promise)
  return <>"j"</>
}

export default TestPage
