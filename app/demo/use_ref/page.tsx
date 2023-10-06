'use client'
import { useEffect, useRef, useState } from "react";

const UseRefPage = () => {
  const [inputValue, setInputValue] = useState('')
  const preInputValue = useRef("")
  useEffect(() => {
    console.log(inputValue)
    console.log(preInputValue)
    preInputValue.current = inputValue
  }, [inputValue])
  const onChange = (e: React.FormEvent) => {
    setInputValue(e.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">First name:</label>
        <input type="text" id="name" name="name" value={inputValue} onChange={onChange}/>
      </form>
      <h2>Current value: {inputValue}</h2>
      <h2>Previous value: {preInputValue.current}</h2>
    </div>
  )
}

export default UseRefPage;