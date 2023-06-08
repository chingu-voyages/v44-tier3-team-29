'use client'
import React, { useState, useEffect } from 'react'
import SVGComponent from './SVGComponent'
import Link from 'next/link'
import NavDesktop from './Nav/Desktop/NavDesktop'
import NavMobile from './Nav/Mobile/NavMobile'
import { useAppSelector } from '@/lib/store/store'
import { selectAuth } from '@/lib/store/features/auth/authSlice'

export default function Nav() {
  const [windowWidth, setWindowWidth] = useState(0)
  const user = useAppSelector(selectAuth)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowWidth(window.innerWidth)
      }

      handleResize()

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return (
    <div className='flex justify-between p-4 text-xl items-center relative z-50'>
      <h1 className='sr-only'>Artemis</h1>
      <Link
        href='/'
        className='mx-3 w-48 min-w-[150px] md:min-w-[192px]'>
        <SVGComponent
          url={'/images/artemis_logo.svg'}
          alt={'Artemis logo with a cat sitting on the right'}
          width={206}
          height={41}
          CSSclass={''}
        />
      </Link>
      {windowWidth >= 900 ? (
        <NavDesktop isLoggedIn={user.isLoggedIn} />
      ) : (
        <NavMobile isLoggedIn={user.isLoggedIn} />
      )}
    </div>
  )
}
