import React from 'react'
import SVGComponent from './SVGComponent'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='p-4 flex justify-between border-t-2 border-gray bg-artemis-white'>
      <Link
        href='/'
        className='mx-3 p-2'>
        <SVGComponent
          url={'/images/artemis_logo.svg'}
          alt={''}
          width={120}
          height={20}
        />
      </Link>
      <p className='mr-auto'>
        <span className='font-semibold'>Made by</span> Anna, Devim, Hours, Lei{' '}
        <br />
        of Chingu Voyage no. 44, 2023
      </p>
      <ul className='grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-1 mx-4'>
        <li className='order-1'>
          <Link href='create-post'>Create Post</Link>
        </li>
        <li className='order-4'>
          <Link href='view-posts'>View Posts</Link>
        </li>
        <li className='order-2'>
          <Link href='our-mission'>Our Mission</Link>
        </li>
        <li className='order-3'>
          <Link href='/meet-the-devs'>Meet the Devs</Link>
        </li>
        <li className='order-5'>
          <Link href='/faq'>FAQ</Link>
        </li>
      </ul>
      <Link
        href='https://github.com/chingu-voyages/v44-tier3-team-29'
        className='m-2'>
        <SVGComponent
          url={'/images/icons/github-icon.svg'}
          alt={''}
          width={32}
          height={32}
        />
      </Link>
    </div>
  )
}
