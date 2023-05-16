import React from 'react'
import Link from 'next/link'
import UserMenuDesktop from "./UserMenuDesktop"
import SigninSignup from "./SigninSignup"

export default function NavDesktop({ isLoggedIn }: {isLoggedIn: boolean}) {

  return (
    <nav className='flex justify-between w-full text-sm lg:text-lg items-center translate-y-1'>
        <ul className='flex'>
          <li>
            <Link
              href='create-post'
              className='mx-3 hover:[text-shadow:_0_0_10px_#8BC34A] ease-in-out duration-300'>
              Create Post
            </Link>
          </li>
          <li>
            <Link
              href='view-posts'
              className='mx-3 hover:[text-shadow:_0_0_10px_#8BC34A] ease-in-out duration-300'>
              View Posts
            </Link>
          </li>
          <li>
            <Link
              href='our-mission'
              className='mx-3 hover:[text-shadow:_0_0_10px_#8BC34A] ease-in-out duration-300'>
              Our Mission
            </Link>
          </li>
          <li>
            <Link
              href='/meet-the-devs'
              className='mx-3 hover:[text-shadow:_0_0_10px_#8BC34A] ease-in-out duration-300'>
              Meet the Devs
            </Link>
          </li>
          <li>
            <Link
              href='/faq'
              className='mx-3 hover:[text-shadow:_0_0_10px_#8BC34A] ease-in-out duration-300'>
              FAQ
            </Link>
          </li>
        </ul>
        {isLoggedIn && <UserMenuDesktop />}
        {!isLoggedIn && <SigninSignup />}
      </nav>
  )
}
