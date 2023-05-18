import React from 'react'
import Layout from './components/Layout'
import MoonLoader from 'react-spinners/MoonLoader'

export default function Loading() {
  return (
    <Layout>
      <div className='flex items-center justify-center max-h-[100%] min-h-[85vh]'>
        <MoonLoader
          color={'#8BC34A'}
          size={150}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      </div>
    </Layout>
  )
}
