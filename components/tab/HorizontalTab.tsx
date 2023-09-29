import { useEffect, useRef, useState } from "react";
interface TabType {
  header: string,
  content: string
}
interface HorizontalTabType {
  tabs: TabType[],
  headerClass?: string,
  headClass?: string,
  contentsClass?: string,
  contentClass?: string
}
const initHeaderClass = "flex flex-row gap-x-3"
const initHeadClass = "text-red-500"
const initContentsClass = "flex flex-col gap-y-2 text-green-900"
const initContentClass = "hidden"

const HorizontalTab: React.FC<HorizontalTabType> = ({tabs, headerClass = initHeaderClass, headClass = initHeadClass, contentsClass = initContentsClass, contentClass = initContentClass}) => {
  
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)
  const contentElements: any = useRef([])
  const previousTabIndex = useRef(selectedTabIndex)

  const selectThisTab = (index: number) => {
    previousTabIndex.current = selectedTabIndex
    setSelectedTabIndex(index)
  }
  useEffect(() => {
    contentElements[previousTabIndex.current].classList.add("hidden")
    contentElements[selectedTabIndex].classList.remove("hidden")
  }, [selectedTabIndex])
  
  return (
    <div>
      <ol className={headerClass}>
        {tabs.map((tab, index) => {
          return (
            <li key={index} onClick={() => selectThisTab(index)}><button className={headClass}>{tab.header}</button></li>
          )
        })}
      </ol>
      <ol className={contentsClass}>
      {tabs.map((tab, index) => {
          return (
            <li ref={thisElement => contentElements[index] = thisElement} key={index} className={contentClass}><div>{tab.content}</div></li>
          )
        })}
      </ol>
    </div>
  )
}
export default HorizontalTab;