'use client'

import { getUser, getUsers } from "@/app/api/users"
import { useQuery } from "react-query"

const HomePage = () => {
  const { isLoading, error, data: user } = useQuery('repoDate111111111111111', () => getUser(1))
  if (isLoading) return "Loading............."
  if (error) return "An error has occurred: " + error.message
  return (
    <div>
      <div>Homeeeeeeeeeeeeeee</div>
      <div>{user.email}</div>

    </div>
  )
}

export default HomePage;