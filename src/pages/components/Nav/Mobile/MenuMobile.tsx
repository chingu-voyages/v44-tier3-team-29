import React from 'react'
import SVGComponent from '../../SVGComponent'
import Link from 'next/link'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export default function MenuMobile() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type='button'
          aria-label='Menu'
          className='px-3 py-2 translate-y-1'>
          <SVGComponent
            url={'/images/icons/menu-icon.svg'}
            alt={''}
            width={35}
            height={35}
          />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className='mr-12 py-3 min-w-[220px] rounded-md shadow-[0px_5px_38px_-10px_rgba(33,_36,_39,_0.33),_0px_10px_20px_-15px_rgba(33,_36,_39,_0.33)] border-2 bg-artemis-white border-artemis-black text-md will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade'>
          <DropdownMenu.Item className='p-2 my-2 h-12 flex justify-center items-center'>
            <Link
              href='/sign-in'
              className='m-3 w-full text-center bg-artemis-white border-artemis-blue py-2 px-3 border-2 text-artemis-blue rounded'>
              Sign in
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className='p-2 my-2 h-12 flex justify-center items-center'>
            <Link
              href='/sign-up'
              className='m-3 w-full text-center border-artemis-blue border-2 bg-artemis-blue py-2 px-3 text-artemis-white rounded'>
              Sign up
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className='h-[2px] min-w-full bg-artemis-gray my-5' />
          <DropdownMenu.Item className='px-4 pr-6 py-1 h-12 flex justify-end items-center'>
            <Link href='create-post'>Create Post</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className='px-4 pr-6 py-1 h-12 flex justify-end items-center'>
            <Link href='viev-post'>View Posts</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className='px-4 pr-6 py-1 h-12 flex justify-end items-center'>
            <Link href='our-mission'>Our Mission</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className='px-4 pr-6 py-1 h-12 flex justify-end items-center'>
            <Link href='meet-the-devs'>Meet the Devs</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className='px-4 pr-6 py-1 h-12 flex justify-end items-center'>
            <Link href='faq'>FAQ</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
