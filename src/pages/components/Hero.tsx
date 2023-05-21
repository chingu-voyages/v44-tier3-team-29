import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className='h-screen p-4 flex flex-col items-center justify-center bg-hero-gradient bg-no-repeat bg-[center_top_-100px] bg-[length:1500px] md:bg-[length:1000px] md:bg-[center_top_50px] lg:bg-[length:1300px] lg:bg-[center_top]'>
      <h2 className='text-center font-light text-7xl p-2'>
        <span className='block lg:-translate-x-36'>Helping strays, </span>
        <span className='block lg:translate-x-32'>one location at a time.</span>
      </h2>
      <p className='text-center mt-9 p-3'>
        Make a difference in the lives of stray animals and help reduce their
        numbers on the streets with{' '}
        <span className='font-semibold'>Artemis</span>.<br />
        We are a compassionate and community-driven web application aimed at
        assisting stray animals through crowd-sourcing.
      </p>
      <ul className='flex lg:hidden translate-y-24'>
        <li>
          <Link
            href='/create-post'
            className='mx-3 bg-artemis-white border-artemis-blue py-3 px-4 border-2 text-artemis-blue rounded hover:drop-shadow-lg ease-in-out duration-300 text-lg'>
            Create Post
          </Link>
        </li>
        <li>
          <Link
            href='/view-posts'
            className='mx-3 border-artemis-blue border-2 bg-artemis-blue py-3 px-4 text-artemis-white rounded hover:drop-shadow-lg ease-in-out duration-300 text-lg'>
            View Posts
          </Link>
        </li>
      </ul>
    </div>
  )
}
