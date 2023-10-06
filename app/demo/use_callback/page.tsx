'use client'
import Todos from "@/components/demo/Todo";
import { useCallback, useState } from "react";

const UseCallbackPage = () => {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])
  const increament = () => {
    setCount((currentCount) => {
      return currentCount + 1
    })
  }
  // const addTodos = useCallback(() => {
  //   console.log("Test Skyler")
  //   setTodos((currentTodos) => {
  //     return [...currentTodos, "New todo"]
  //   })
  // }, [todos]);
  const addTodos = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);
  return (
    <div>
      <div>Todo List</div>
      <Todos todos={todos} addTodo={addTodos}/>
      <div>Count: {count}</div>
      <button onClick={increament}>Press</button>
    </div>
  )
}

export default UseCallbackPage;