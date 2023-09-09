import { useState } from "react";

const Tab = ({children}: {children: React.ReactNode}) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0)
  
  return (
    <div>{children}</div>
  )
}

export default Tab;