'use client'

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import HomePage from './pages/home/page'
import User from './components/forms/User'


export default function Home() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex min-h-screen flex-col items-center justify-between text-black">
        <HomePage />
        <User />
      </main>
    </QueryClientProvider>
  )
}
