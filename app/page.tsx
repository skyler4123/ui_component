'use client'
import Button from './components/button/Button'
import Content from './components/tab/Content'
import Contents from './components/tab/Contents'
import Head from './components/tab/Head'
import Header from './components/tab/Header'
import Tab from './components/tab/Tab'

export default function Home() {
  const buttonClick = () => {
    console.log("Button Clicked!")
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-black">
      <Button onClickFunction={buttonClick} label="Enter" />
      <Tab>
        <Header>
          <Head label="Head 1" />
          <Head label="Head 2" />
          <Head label="Head 3" />
        </Header>
        <Contents>
          <Content content="Content 1" />
          <Content content="Content 2" />
          <Content content="Content 3" />
        </Contents>
      </Tab>
    </main>
  )
}
