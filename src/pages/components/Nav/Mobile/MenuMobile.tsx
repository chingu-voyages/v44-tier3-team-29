import React from 'react'
import SVGComponent from '../../SVGComponent'
import Link from 'next/link'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { TMenuItems } from '../../../../lib/types/MenuItemTypes'

export default function MenuMobile() {
  const menuItems: TMenuItems = [
    {
      href: '/create-post',
      content: 'Create Post'
    },
    {
      href: '/view-posts',
      content: 'View Posts'
    },
    {
      href: '/our-mission',
      content: 'Our Mission'
    },
    {
      href: '/meet-the-devs',
      content: 'Meet the Devs'
    },
    {
      href: '/faq',
      content: 'FAQ'
    }
  ]

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
            CSSclass={''}
          />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className='mr-12 py-3 min-w-[180px] rounded-md shadow-[0px_5px_38px_-10px_rgba(33,_36,_39,_0.33),_0px_10px_20px_-15px_rgba(33,_36,_39,_0.33)] border-2 bg-artemis-white border-artemis-black text-md will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-50'>
          <DropdownMenu.Item className='p-2 my-2 h-12 flex justify-center items-center'>
            <Link
              href='/sign-in'
              className='m-2 w-full text-center bg-artemis-white border-artemis-blue py-2 px-3 border-2 text-artemis-blue rounded'>
              Sign in
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className='p-2 my-2 h-12 flex justify-center items-center'>
            <Link
              href='/sign-up'
              className='m-2 w-full text-center border-artemis-blue border-2 bg-artemis-blue py-2 px-3 text-artemis-white rounded'>
              Sign up
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className='h-[2px] min-w-full bg-artemis-gray my-5' />
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

            return node
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
