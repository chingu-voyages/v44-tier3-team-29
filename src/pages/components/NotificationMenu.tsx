import React from 'react'
import SVGComponent from './SVGComponent'
import Link from 'next/link'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export default function NotificationMenu() {
  return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            type='button'
            aria-label='Notification'
            className='mx-3'>
            <SVGComponent
              url={'/images/icons/notification-icon.svg'}
              alt={''}
              width={33}
              height={33}
            />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal className="relative">
          <DropdownMenu.Content className='text-sm absolute right-[-10px] py-3 min-w-[250px] rounded-md shadow-[0px_5px_38px_-10px_rgba(33,_36,_39,_0.33),_0px_10px_20px_-15px_rgba(33,_36,_39,_0.33)] border-2 bg-artemis-white border-artemis-black text-lg will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade' sideOffset={10} alignOffset={20}>
            <DropdownMenu.Item className='p-2 my-2 border-b-2 border-artemis-gray'>
              <p>Your post [post name] has a new comment! Click here to see it.</p>
              <p>2023/05/11</p>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
  )
}
