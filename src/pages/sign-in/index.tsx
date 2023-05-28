import React from "react"
import Layout from "../components/Layout"
import Link from 'next/link'


export default function SignUp() {
    return (
        <Layout>
            <div className='h-scren'>

                <div className="grid place-items-center mt-10 md:mt-20 lg:mt-[90px] mb-[150px]">
                    <div className="grid grid-cols-12 mx-5 lg:w-4/12">
                        <h2 className='text-5xl lg:text-6xl mb-3 col-span-12 text-left font-bold'>Sign In</h2>
                        <h3 className="text-lg mb-5 col-span-12 text-gray-500">
                        Welcome back! Join our pawsitive movement and rescue stray animals!
                        </h3>

                        <div className="col-span-12 mt-6 bg-white rounded-md">
                            <label
                                className="block overflow-hidden rounded-md border border-gray-500 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <span className="text-sm font-bold text-gray-400">Username</span>

                                <input
                                    type="text"
                                    id="username"
                                    placeholder="meowuser"
                                    className="mt-2 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-md"
                                />
                            </label>
                        </div>

                        <div className="col-span-12 mt-6 bg-white rounded-md">
                            <label
                                className="block overflow-hidden rounded-md border border-gray-500 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <span className="text-sm font-bold text-gray-400">Password</span>

                                <input
                                    type="password"
                                    id="pwduser"
                                    placeholder=""
                                    className="mt-2 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-md"
                                />
                            </label>
                        </div>
                        <div className="col-span-5 mt-2">
                            <input type="checkbox" name="chkRemember" /> &nbsp;
                            <label htmlFor="chkRemember" className="text-gray-500">Remember Me</label>
                        </div>

                        <div className="col-start-7 col-span-6 text-right mt-2 text-[#00BFFF]">
                            Forgot Password
                        </div>

                        <button className="rounded col-span-12 my-5 text-lg bg-[#00BFFF] py-2 text-white">Login</button>

                        <h3 className="text-sm px-5 mt-10 col-span-12 text-center text-gray-500">
                         Don&apos;t have an account? <Link className="font-bold text-[#00BFFF]" href="/sign-up">Sign Up</Link>
                        </h3>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
