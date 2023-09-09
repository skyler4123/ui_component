import { useState } from "react";

const testt = () => {
  return "testttttt"
}
const Tab = ({children}: {children: React.ReactNode}) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0)
  console.log(testt())
  return (
    <div>{children}</div>
  )
}

export default Tab;