import Layout from '../components/Layout'
import React, { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/lib/hooks/useAuth'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const { register } = useAuth()

  const handleSignUp = async () => {
    const registerData = {
      username,
      email,
      password,
      confirm_password: confirmPassword
    }

    await register(registerData).catch(err => console.log(err))
  }

  return (
    <Layout>
      <div className='h-scren'>
        <div className='grid place-items-center mt-10 md:mt-20 mb-[150px]'>
          <div className='grid grid-cols-12 mx-5 lg:w-8/12 xl:w-5/12'>
            <h2 className='text-5xl lg:text-6xl mb-3 col-span-12 text-left font-bold'>
              Sign Up
            </h2>
            <h3 className='text-lg mb-5 col-span-12 text-gray-500'>
              Pawsitive Impact Starts Here - Sign up and make a difference in
              the lives of stray animals!
            </h3>

            <div className='col-span-12 bg-white'>
              <label className='block overflow-hidden rounded-md border border-gray-500 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'>
                <span className='text-sm font-bold text-gray-400'>
                  E-mail address
                </span>

                <input
                  type='email'
                  id='emailadd'
                  placeholder='user@artemis.com'
                  className='mt-2 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-md'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                />
              </label>
            </div>

            <div className='col-span-12 mt-6 bg-white'>
              <label className='block overflow-hidden rounded-md border border-gray-500 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'>
                <span className='text-sm font-bold text-gray-400'>
                  Username
                </span>

                <input
                  type='text'
                  id='username'
                  placeholder='meowuser'
                  className='mt-2 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-md'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setUsername(e.target.value)
                  }
                />
              </label>
            </div>

            <div className='col-span-12 mt-6 bg-white'>
              <label className='block overflow-hidden rounded-md border border-gray-500 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'>
                <span className='text-sm font-bold text-gray-400'>
                  Password
                </span>

                <input
                  type='password'
                  id='pwduser'
                  placeholder=''
                  className='mt-2 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-md'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                />
              </label>
            </div>

            <div className='col-span-12 mt-6 bg-white'>
              <label className='block overflow-hidden rounded-md border border-gray-500 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'>
                <span className='text-sm font-bold text-gray-400'>
                  Confirm Password
                </span>

                <input
                  type='password'
                  id='confirmpwduser'
                  placeholder=''
                  className='mt-2 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-md'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setConfirmPassword(e.target.value)
                  }
                />
              </label>
            </div>

            <h3 className='text-sm mt-5 px-5 lg:px-10  col-span-12 text-gray-500 text-center'>
              By clicking the &quot;Register&quot; button below, you acknowledge
              that you have read, understood, and agree to be bound by the
              following{' '}
              <a
                className='font-bold text-[#00BFFF]'
                href='#'>
                Terms and Conditions
              </a>
            </h3>
            <button
              className='rounded col-span-12 my-5 text-lg bg-[#00BFFF] py-2 text-white'
              onClick={handleSignUp}>
              Sign Up
            </button>

            <h3 className='text-sm px-5 mt-10 col-span-12 text-center text-gray-500'>
              Been here before?{' '}
              <Link
                className='font-bold text-[#00BFFF]'
                href='/sign-in'>
                Sign In
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </Layout>
  )
}
