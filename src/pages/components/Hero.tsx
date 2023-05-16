import React from 'react'

export default function Hero() {
  return (
    <div className='h-screen p-4 flex flex-col items-center justify-center bg-hero-gradient bg-center bg-no-repeat bg-auto'>
      <p className='text-center font-light text-7xl p-2'>
        <span className='block lg:-translate-x-36'>Helping strays, </span>
        <span className='block lg:translate-x-32'>one location at a time.</span>
      </p>
      <p className='text-center mt-9 p-3'>
        Make a difference in the lives of stray animals and help reduce their
        numbers on the streets with{' '}
        <span className='font-normal font-semibold'>Artemis</span>.<br />
        We are a compassionate and community-driven web application aimed at
        assisting stray animals through crowd-sourcing.
      </p>
    </div>
  )
}
