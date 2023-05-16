import React from 'react'
import SVGComponent from './SVGComponent'
import Link from 'next/link'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export default function UserMenuMobile() {
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
        <DropdownMenu.Content className='mr-12 py-3 min-w-[220px] rounded-md shadow-[0px_5px_38px_-10px_rgba(33,_36,_39,_0.33),_0px_10px_20px_-15px_rgba(33,_36,_39,_0.33)] border-2 bg-artemis-white border-artemis-black text-lg will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade'>
          <DropdownMenu.Item className='px-4 py-1 flex flex-col'>
            <p className='uppercase font-semibold text-xs text-left mb-4 text-artemis-gray'>
              Account
            </p>
            <div className='flex items-start justify-center'>
              <SVGComponent
                url={'/images/icons/user-icon.svg'}
                alt={''}
                width={50}
                height={50}
              />
              <p className='ml-3 truncate'>
                User Name <br />
                <span className='text-artemis-gray'>name@email.com</span>
              </p>
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className='px-4 pr-6 py-1 h-12 flex justify-end items-center'>
            <Link
              href='/profile'
              className=''>
              Profile
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className='px-4 pr-6 py-1 h-12 flex justify-end items-center'>
            <Link
              href='/my-posts'
              className=''>
              My posts
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className='px-4 pr-6 py-1 h-12 flex justify-end items-center'>
            <Link
              href='/settings'
              className=''>
              Settings
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className='h-[2px] min-w-full bg-artemis-gray my-2' />
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
          <DropdownMenu.Separator className='h-[2px] min-w-full bg-artemis-gray my-2' />
          <DropdownMenu.Item className='px-4 pr-6 py-1 h-12 flex justify-end items-center'>
            <Link
              href='/logout'
              className=''>
              Log out
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
