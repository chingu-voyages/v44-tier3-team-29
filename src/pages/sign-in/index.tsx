import React, { useState } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import { useAuth } from '@/lib/hooks/useAuth'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()

  const handleSignIn = async () => {
    const loginData = {
      email,
      password
    }

    await login(loginData).catch(err => console.log(err))
  }
  return (
    <Layout>
      <div className='min-h-[80vh] p-7 max-w-[600px] flex mx-auto'>
        <div className='grid place-items-center mt-10 md:mt-20 mb-[150px]'>
          <div className='grid grid-cols-12 mx-5'>
            <h2 className='text-5xl lg:text-6xl mb-3 col-span-12 font-bold text-center'>
              Sign In
            </h2>
            <h3 className='text-lg mb-5 col-span-12 text-artemis-gray'>
              Welcome back! Join our pawsitive movement and rescue stray
              animals!
            </h3>

            <div className='col-span-12'>
              <label className='block overflow-hidden rounded-lg border-2 border-artemis-black px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'>
                <span className='text-sm font-bold text-artemis-black'>
                  Email
                </span>

                <input
                  type='text'
                  id='email'
                  placeholder='meowuser'
                  className='mt-2 w-full leading-10 border-none p-0 rounded bg-artemis-white focus:border-transparent focus:outline-none focus:ring-0'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                />
              </label>
            </div>

            <div className='col-span-12 mt-6 bg-white rounded-md'>
              <label className='block overflow-hidden rounded-lg border-2 border-artemis-black px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'>
                <span className='text-sm font-bold text-artemis-black'>
                  Password
                </span>

                <input
                  type='password'
                  id='pwduser'
                  placeholder=''
                  className='mt-2 w-full leading-10 border-none p-0 rounded bg-artemis-white focus:border-transparent focus:outline-none focus:ring-0'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                />
              </label>
            </div>
            <div className='col-span-5 mt-3'>
              <label
                htmlFor='chkRemember'
                className='text-artemis-black cursor-pointer'>
                <input
                  type='checkbox'
                  name='chkRemember'
                  id='chkRemember'
                />{' '}
                &nbsp; Remember Me
              </label>
            </div>

            <div className='col-start-7 col-span-6 text-right mt-3 text-artemis-blue'>
              <Link href=''>Forgot password?</Link>
            </div>

            <button
              className='font-bold rounded col-span-12 my-3 mt-10 text-lg bg-artemis-blue py-4 px-5 text-white'
              onClick={handleSignIn}>
              Login
            </button>

            <p className='text-sm px-5 mt-10 col-span-12 text-center text-artemis-black'>
              Don&apos;t have an account?{' '}
              <Link
                className='font-bold text-artemis-blue'
                href='/sign-up'>
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
