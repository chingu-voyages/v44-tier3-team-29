'use client'
import React, { useEffect, useState } from 'react'
import SVGComponent from './SVGComponent'
import Link from 'next/link'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  const handleVisibility = () => {
    const isFooterVisible =
      window.innerHeight + window.scrollY >= document.body.offsetHeight

    setIsVisible(isFooterVisible)
  }

  useEffect(() => {
    handleVisibility()

    const handleScrollAndResize = () => {
      handleVisibility()
    }

    window.addEventListener('scroll', handleScrollAndResize)
    window.addEventListener('resize', handleScrollAndResize)

    return () => {
      window.removeEventListener('scroll', handleScrollAndResize)
      window.removeEventListener('resize', handleScrollAndResize)
    }
  }, [])

  return (
    <div
      className={`p-4 flex justify-between border-t-2 border-gray bg-artemis-white text-xs md:text-sm fixed bottom-0 left-0 w-full ${
        isVisible ? 'show-footer' : 'hide-footer'
      }`}>
      <Link
        href='/'
        className='mx-3 p-2'>
        <SVGComponent
          url={'/images/artemis_logo.svg'}
          alt={'Artemis logo with a cat sitting on the right'}
          width={120}
          height={20}
          CSSclass={''}
        />
      </Link>
      <p className='mr-auto'>
        <span className='font-semibold block md:inline'>Made by</span> Anna,
        Devim, Horus, Lei <br />
        of Chingu Voyage no. 44, 2023
      </p>
      <ul className='grid grid-cols-3 gap-x-6 gap-y-1 mx-4'>
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
        <li className='order-6 md:hidden block'>
          <Link href='https://github.com/chingu-voyages/v44-tier3-team-29'>
            <SVGComponent
              url={'/images/icons/github-icon.svg'}
              alt={'GitHub logo: Link to Artemis&apos;s Github Repository.'}
              width={16}
              height={16}
              CSSclass={''}
            />
          </Link>
        </li>
      </ul>
      <Link
        href='https://github.com/chingu-voyages/v44-tier3-team-29'
        className='m-2 hidden md:block'>
        <SVGComponent
          url={'/images/icons/github-icon.svg'}
          alt={'GitHub logo: Link to Artemis&apos;s Github Repository.'}
          width={32}
          height={32}
          CSSclass={''}
        />
      </Link>
    </div>
  )
}
