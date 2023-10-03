'use client'

import Dropdown from '@/components/dropdown/Dropdown'
import HeaderSticky from '@/components/header/HeaderSticky'
import CheckCircle from '@/components/icons/CheckCircle'
import Global from '@/components/icons/Global'
import Star from '@/components/icons/Star'
import List from '@/components/list/List'
import SearchWithButton from '@/components/search/SearchWithButton'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <HeaderSticky>
        <Dropdown label="Skyler" items={[
          {label: "Link 1", url: "#"},
          {label: "Ku Nhiu", url: '#'},
          {label: "Xa iu", url: "#"}
        ]}/>
        <Link href="#" className='flex flex-row gap-x-1'><span><Global /></span>English</Link>
      </HeaderSticky>
      <main className="flex min-h-screen flex-col items-center justify-between text-black bg-slate-200">
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <SearchWithButton />
        <CheckCircle />
        <List label="Skyler List:" items={[
          {label: "Item 1", url: "#", icon: <CheckCircle svgClass='w-4 h-4 text-green-500'/>},
          {label: "Item 2", url: "#", icon: <Star />},
          {label: "Item 3", url: "#"}
        ]}/>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" checked />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>vvvvv
      </main>
    </>
  )
}
