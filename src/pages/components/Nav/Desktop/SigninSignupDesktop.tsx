import React from 'react'
import Link from 'next/link'

export default function SigninSignup() {
  return (
    <ul className='flex'>
      <li>
        <Link
          href='/sign-in'
          className='mx-3 bg-artemis-white border-artemis-blue py-2 px-3 border-2 text-artemis-blue rounded hover:drop-shadow-lg ease-in-out duration-300'>
          Sign in
        </Link>
      </li>
      <li>
        <Link
          href='/sign-up'
          className='mx-3 border-artemis-blue border-2 bg-artemis-blue py-2 px-3 text-artemis-white rounded hover:drop-shadow-lg ease-in-out duration-300'>
          Sign up
        </Link>
      </li>
    </ul>
  )
}
