'use client'
interface IDropdownItem {
  label: string,
  url: string
}
interface IDropdown {
  label: string,
  items: IDropdownItem[]
}

import { useRef, useState } from "react";

const Dropdown: React.FC<IDropdown> = ({label = "Dropdown", items}) => {
  const [status, setStatus] = useState("close")
  const arrowElement = useRef<HTMLDivElement>(null)
  const itemsElement = useRef<HTMLDivElement>(null)
  const toggleDropdown = () => {
    status === "close" ? setStatus("open") : setStatus("close")
    if (arrowElement.current) { arrowElement.current.classList.toggle('rotate-180') }
    if (itemsElement.current) { itemsElement.current.classList.toggle('hidden') }
  }
  return (
    <div>
      <button onClick={toggleDropdown} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
        {label}
        <div ref={arrowElement} className="mx-2">
          <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
        </div>
      </button>

      <div ref={itemsElement} className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
          {items.map((item, index) => {
            return (
            <li key={index}>
              <a href={item.url} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{item.label}</a>
            </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Dropdown;