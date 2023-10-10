'use client'
import { useEffect, useRef } from "react";
import Sortable from 'sortablejs';

const Page = () => {
  const dragRef = useRef(null)
  const sortableRef1 = useRef(null)
  const sortableRef2 = useRef(null)
  useEffect(() => {
    const dragElem = dragRef.current
    const sortableElement1 = sortableRef1.current
    const sortableElement2 = sortableRef2.current
    Sortable.create(sortableElement1, {group: {name: "sort", pull: 'clone', put: true}})
    Sortable.create(sortableElement2, {group: {name: "sort"}, onEnd: () => { console.log("Skyler!!!!!!!!!!!!") }, invertSwap: true})
  })
  return (
    <div>
      <button ref={dragRef} draggable>jhkjhjkhkj</button>
      <ul ref={sortableRef1}>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
      <hr />
      <ul ref={sortableRef2}>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    </div>
  )
}

export default Page;