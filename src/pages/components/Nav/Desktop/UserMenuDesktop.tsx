import React from 'react'
import SVGComponent from '../../SVGComponent'
import Link from 'next/link'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import NotificationMenu from '../../NotificationMenu'

type TMenuItem = {
  href: string
  content: string
}

type TMenuItems = TMenuItem[]

export default function UserMenuDesktop() {
  const menuItems: TMenuItems = [
    {
      href: '/profile',
      content: 'Profile'
    },
    {
      href: '/my-posts',
      content: 'My Posts'
    },
    {
      href: '/settings',
      content: 'Settings'
    },
    {
      href: '/logout',
      content: 'Log out'
    }
  ]

  return (
    <div>
      <NotificationMenu />
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            type='button'
            aria-label='Notification'
            className='mx-3'>
            <SVGComponent
              url={'/images/icons/user-icon.svg'}
              alt={''}
              width={35}
              height={35}
              CSSclass={''}
            />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal className='relative'>
          <DropdownMenu.Content
            className='absolute right-[-10px] py-3 w-[250px] rounded-md shadow-[0px_5px_38px_-10px_rgba(33,_36,_39,_0.33),_0px_10px_20px_-15px_rgba(33,_36,_39,_0.33)] border-2 bg-artemis-white border-artemis-black text-md will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-50'
            sideOffset={10}
            alignOffset={20}>
            <DropdownMenu.Item className='px-4 py-1 flex flex-col'>
              <p className='uppercase font-semibold text-xs text-left mb-4 text-artemis-gray'>
                Account
              </p>
              <div className='flex items-start justify-center mb-2'>
                <SVGComponent
                  url={'/images/icons/user-icon.svg'}
                  alt={''}
                  width={50}
                  height={50}
                  CSSclass={''}
                />
                <p className='ml-3 truncate'>
                  User Name <br />
                  <span className='text-artemis-gray'>name@email.com</span>
                </p>
              </div>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className='h-[2px] min-w-full bg-artemis-gray my-2' />
            {menuItems.map(i => {
              const node = (
                <DropdownMenu.Item
                  key={i.href}
                  className='px-4 pr-6 py-1 h-12 flex justify-start mx-1 items-center'>
                  <Link
                    href={i.href}
                    className=''>
                    {i.content}
                  </Link>
                </DropdownMenu.Item>
              )

              const seperator = (
                <DropdownMenu.Separator className='h-[2px] min-w-full bg-artemis-gray my-2' />
              )

              if (i.href === '/logout')
                return (
                  <div key={i.href}>
                    {seperator}
                    {node}
                  </div>
                )

              return node
            })}
            {/* <DropdownMenu.Item className='px-4 pr-6 py-1 h-12 flex justify-end items-center'>
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
            </DropdownMenu.Item> */}
            {/* <DropdownMenu.Separator className='h-[2px] min-w-full bg-artemis-gray my-2' />
            <DropdownMenu.Item className='px-4 pr-6 py-1 h-12 flex justify-start mx-1 items-center'>
              <Link
                href='/logout'
                className=''>
                Log out
              </Link>
            </DropdownMenu.Item> */}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )
}
