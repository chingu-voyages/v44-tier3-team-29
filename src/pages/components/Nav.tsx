'use client'
import React, { useState, useEffect } from 'react'
import SVGComponent from './SVGComponent'
import Link from 'next/link'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'

export default function Nav() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='flex justify-between p-4 text-xl items-center'>
      <h1 className='sr-only'>Artemis</h1>
      <Link
        href='/'
        className='mx-3 w-48 min-w-[192px]'>
        <SVGComponent
          url={'/images/artemis_logo.svg'}
          alt={'Artemis logo with a cat sitting on the right'}
          width={206}
          height={41}
        />
      </Link>
      {windowWidth >= 880 ? (
        <NavDesktop isLoggedIn={isLoggedIn} />
      ) : (
        <NavMobile isLoggedIn={isLoggedIn} />
      )}
    </div>
  )
}
