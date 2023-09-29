import axios from "axios";

export const getUsers = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  return response.data
}

export const getUser = async (id: number) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  return response.data
}