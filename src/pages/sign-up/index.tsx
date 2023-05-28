import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function SignUp() {
  return (
    <Layout>
      <div className='min-h-[80vh] p-7 max-w-[600px] flex mx-auto'>
        <div className='grid place-items-center mt-10 md:mt-20 mb-[150px]'>
          <div className='grid grid-cols-12 mx-5'>
            <h2 className='text-5xl lg:text-6xl mb-3 col-span-12 font-bold text-center'>
              Sign Up
            </h2>
            <h3 className='text-lg mb-5 col-span-12 text-artemis-gray'>
              Pawsitive Impact Starts Here - Sign up and make a difference in
              the lives of stray animals!
            </h3>

            <div className='col-span-12'>
              <label className='block overflow-hidden rounded-lg border-2 border-artemis-black px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'>
                <span className='text-sm font-bold text-artemis-black'>
                  E-mail address
                </span>

                <input
                  type='email'
                  id='emailadd'
                  placeholder='user@artemis.com'
                  className='mt-2 w-full leading-10 border-none p-0 rounded bg-artemis-white focus:border-transparent focus:outline-none focus:ring-0'
                />
              </label>
            </div>

            <div className='col-span-12 mt-6'>
              <label className='block overflow-hidden rounded-lg border-2 border-artemis-black px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'>
                <span className='text-sm font-bold text-artemis-black'>
                  Username
                </span>

                <input
                  type='text'
                  id='username'
                  placeholder='meowuser'
                  className='mt-2 w-full leading-10 border-none p-0 rounded bg-artemis-white focus:border-transparent focus:outline-none focus:ring-0'
                />
              </label>
            </div>

            <div className='col-span-12 mt-6'>
              <label className='block overflow-hidden rounded-lg border-2 border-artemis-black px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'>
                <span className='text-sm font-bold text-artemis-black'>
                  Password
                </span>

                <input
                  type='password'
                  id='pwduser'
                  placeholder='••••••••'
                  className='mt-2 w-full border-none p-0 leading-10 rounded bg-artemis-white focus:border-transparent focus:outline-none focus:ring-0'
                />
              </label>
            </div>

            <div className='col-span-12 mt-6 bg-white'>
              <label className='block overflow-hidden rounded-lg border-2 border-artemis-black px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'>
                <span className='text-sm font-bold text-artemis-black'>
                  Confirm Password
                </span>

                <input
                  type='password'
                  id='confirmpwduser'
                  placeholder='••••••••'
                  className='mt-2 w-full border-none p-0 leading-10 rounded bg-artemis-white focus:border-transparent focus:outline-none focus:ring-0'
                />
              </label>
            </div>

            <p className='text-sm my-7 px-5 lg:px-10  col-span-12 text-artemis-black text-center leading-6'>
              By clicking th Sign Up button, you acknowledge
              that you have read, understood, and agree to be bound by the
              following{" "}
              <a
                className='font-bold text-artemis-blue'
                href='#'>
                Terms and Conditions
              </a>
            </p>
            <button className='font-bold rounded col-span-12 my-3 text-lg bg-artemis-blue py-4 px-5 text-white'>
              Sign Up
            </button>

            <p className='text-sm px-5 mt-10 col-span-12 text-center text-artemis-black'>
              Been here before?{" "}
              <Link
                className='font-bold text-artemis-blue'
                href='/sign-in'>
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
