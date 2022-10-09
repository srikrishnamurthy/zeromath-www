import Link from 'next/link'
import React from 'react'


function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto font-rsfmedium">
        <div className="flex items-center space-x-5">
            <Link href="/">
                <img className="px-2 w-64 object-contain cursor-pointer" src="/zeromath-logo-transparent.png" alt=""/>
            </Link>
            <div className="hidden md:inline-flex items-center space-x-5">
              <h3>about</h3>
              <h3>contact</h3>
              <h3 className="text-white bg-fuchsia-500 px-4 py-1 rounded-full">follow</h3>
            </div>
        </div>
        <div className="flex items-center space-x-5 text-fuchsia-500">
          <h3>Sign In</h3>
          <h3 className="border px-4 py-1 rounded-full border-fuchsia-500">Get Started</h3>
        </div>
    </header>
  )
}

export default Header