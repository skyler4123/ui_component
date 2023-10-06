'use client'

import { useState } from "react";

const Page = () => {
  const [ticks, setTicks] = useState([])
  const ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");
  const apiCall = {
    ticks: 'frxGBPNZD'
  };
  ws.onopen = (event) => {
    ws.send(JSON.stringify(apiCall));
  };
  ws.onmessage = function (event) {
    const json = JSON.parse(event.data);
    try {
      if ((json.event = "data")) {
        // setTicks([...ticks, json.tick])
        console.log(json.tick.bid)
        setTicks(currentTicks => [...currentTicks, json.tick.bid])
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>WebSocket</div>
  )
}

export default Page;