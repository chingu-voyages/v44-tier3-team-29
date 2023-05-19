import React from 'react'
import Layout from './components/Layout'
import Image from 'next/image'

export default function Loading() {
  return (
    <Layout>
      <div className='relative flex items-center justify-center max-h-[100%] min-h-[85vh]'>
        <div className='absolute h-[62.5px] left-[calc(50%-50px)] top-[40%] inset-0 overflow-hidden'>
          <Image
            className='absolute w-auto h-auto animate-catSprintAnim'
            priority={true}
            width={100}
            height={100}
            alt='An animation of a running cat'
            src='/images/cat_sprint.png'
          />
        </div>
        <h2 className='absolute left-[calc(50%-30px)] top-[43vh] text-xl'>
          Loading...
        </h2>
      </div>
    </Layout>
  )
}
