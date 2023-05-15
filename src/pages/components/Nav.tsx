import React from 'react'
import SVGComponent from './SVGComponent'
import Link from 'next/link'

export default function Nav() {
  return (
    <div className="flex justify-between items-end p-3 text-xl">
      <Link href="/" className="mx-3">
        <SVGComponent url={'/images/artemis_logo.svg'} alt={""} width={206} height={41} />
      </Link>
      <nav className="flex justify-between w-full">
        <ul className="flex">
          <li><Link href="create-post" className="mx-3 hover:[text-shadow:_0_0_10px_#8BC34A] ease-in-out duration-300">Create Post</Link></li>
          <li><Link href="view-posts" className="mx-3 hover:[text-shadow:_0_0_10px_#8BC34A] ease-in-out duration-300">View Posts</Link></li>
          <li><Link href="our-mission" className="mx-3 hover:[text-shadow:_0_0_10px_#8BC34A] ease-in-out duration-300">Our Mission</Link></li>
          <li><Link href="/meet-the-devs" className="mx-3 hover:[text-shadow:_0_0_10px_#8BC34A] ease-in-out duration-300">Meet the Devs</Link></li>
          <li><Link href="/faq" className="mx-3 hover:[text-shadow:_0_0_10px_#8BC34A] ease-in-out duration-300">FAQ</Link></li>
        </ul>
        <ul className="flex">
          <li><Link href="/sign-in" className="mx-3 bg-artemis-white border-artemis-blue py-2 px-3 border-2 text-artemis-blue rounded hover:drop-shadow-lg ease-in-out duration-300">Sign in</Link></li>
          <li><Link href="/sign-up" className="mx-3 border-artemis-blue border-2 bg-artemis-blue py-2 px-3 text-artemis-white rounded hover:drop-shadow-lg ease-in-out duration-300">Sign up</Link></li>
        </ul>
      </nav>
    </div>
  )
}
