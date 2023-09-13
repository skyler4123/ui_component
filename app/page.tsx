'use client'

import axios from 'axios'
import Button from './components/button/Button'
import Modal from './components/modal/Modal'
import HorizontalTab from './components/tab/HorizontalTab'
import VerticalTab from './components/tab/VerticalTab'
import { GetStaticProps } from 'next'

export default function Home() {
  const buttonClick = () => {
    console.log("Button Clicked!")
  }
  // const fetchDate: GetStaticProps = async (context) => {
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
  //   console.log(response.data)
  // }
  // console.log(fetchDate())
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-black">
      <Modal />
      <Button onClickFunction={buttonClick} label="Enter" />
      <HorizontalTab tabs={[
        {header: "First", content: "This is the first item"},
        {header: "Second", content: "This is the second item"},
        {header: "Third", content: "This is the third item"}
      ]}/>
      <VerticalTab tabs={[
        {header: "First", content: "This is the first item"},
        {header: "Second", content: "This is the second item"},
        {header: "Third", content: "This is the third item"}
      ]}/>
    </main>
  )
}
