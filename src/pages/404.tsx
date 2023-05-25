'use client'
import React from 'react'
import Layout from './components/Layout'
import Link from 'next/link'

export default function Error404() {
  return (
    <Layout>
      <div className='mb-[100px] max-h-[100%] min-h-[650px] flex flex-col p-2 justify-center items-center bg-error-cats-mobile bg-[center_bottom_50px] bg-contain bg-no-repeat md:bg-error-cats md:bg-center md:bg-auto'>
        <h2 className='text-6xl mb-8 text-center'>Meow-nificent!</h2>
        <p className='p-3 text-center text-lg leading-8'>
          You&apos;ve stumbled upon the secret page for cat lovers. <br />
          Unfortunately, the dogs got jealous and chewed up the code.
          <br />
          We apologize for the &apos;cat&apos;-astrophe.
        </p>
        <Link
          href='.'
          className='text-artemis-blue font-semibold translate-y-20'>
          Go back
        </Link>
      </div>
    </Layout>
  )
}
