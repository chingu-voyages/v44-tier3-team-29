import React from 'react'
import Layout from './components/Layout'
import Image from 'next/image'
import MoonLoader from 'react-spinners/MoonLoader'

export default function Loading() {
  return (
    <Layout>
      <div className='flex items-center justify-center max-h-[100%] min-h-[85vh]'>
        {/* <MoonLoader
          color={'#8BC34A'}
          size={150}
          aria-label='Loading Spinner'
          data-testid='loader'
        /> */}
        <div className='absolute h-[62.5px] left-[45%] top-[40%] inset-0 overflow-hidden'>
          <Image
            className='absolute w-auto h-auto animate-catSprintAnim'
            priority={true}
            width={100}
            height={100}
            alt='cat_sprint'
            src='/images/cat_sprint.png'
          />
        </div>
        <h1>Loading...</h1>
      </div>
    </Layout>
  )
}
