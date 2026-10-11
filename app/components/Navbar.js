import React from 'react'
import Link from 'next/link'
import Btn from './Btn'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-2 h-[9vh] flex justify-between items-center">
      <div className="text-2xl font-bold">
        <h1 className="text-2xl font-bold pl-4">Linkly</h1>
      </div>


      <div className="flex gap-6">
        <span className="flex justify-center items-center">
          <ul className="flex gap-4 justify-around items-center">
            <Link href="/"><li className="hover:text-blue-500 active:underline">Home</li></Link>
            <Link href="/about"><li className="hover:text-blue-500 active:underline">About</li></Link>
            <Link href="/shortner"><li className="hover:text-blue-500 active:underline">Shortner</li></Link>
            <Link href="/contact"><li className="hover:text-blue-500 active:underline">Contact</li></Link>
          </ul>
        </span>
        <span className="flex gap-4">

          <Link href="/shortner"> <Btn name="Try now" arrow={false} /></Link>
          <Link href="https://github.com/HULK-CODDER" target="_blank">
            <Btn name="GitHub" arrow={false} />
          </Link>

        </span>
      </div>


    </nav>
  )
}

export default Navbar