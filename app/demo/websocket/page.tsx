'use client'

import { useState } from "react";

const Page = () => {
  const [ticks, setTicks] = useState([])
  const ws = new WebSocket("wss://0.0.0.0:8080");
  ws.onopen = (event) => {
    console.log(event)
  }

  return (
    <div>WebSocket</div>
  )
}

export default Page;