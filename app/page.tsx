'use client'

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

export default function Home() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex min-h-screen flex-col items-center justify-between text-black">
        <div>HomePage</div>
      </main>
    </QueryClientProvider>
  )
}
