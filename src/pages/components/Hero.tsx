import React from 'react'

export default function Hero() {
  return (
    <div className='h-screen p-4 flex flex-col items-center justify-center bg-hero-gradient bg-center bg-no-repeat bg-auto'>
      <p className='text-7xl font-light'>
        <span className='block -translate-x-36'>Helping strays, </span>
        <span className='block translate-x-32'>one location at a time.</span>
      </p>
      <p className='text-center mt-9'>
        Make a difference in the lives of stray animals and help reduce their
        numbers on the streets with{' '}
        <span className='font-semibold'>Artemis</span>.<br />
        We are a compassionate and community-driven web application aimed at
        assisting stray animals through crowd-sourcing.
      </p>
    </div>
  )
}
