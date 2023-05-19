import React from 'react'
import SVGComponent from './SVGComponent'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export default function NotificationMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type='button'
          aria-label='Notification'
          className='px-3 py-2'>
          <SVGComponent
            url={'/images/icons/notification-icon.svg'}
            alt={''}
            width={33}
            height={33}
            CSSclass={''}
          />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal className='relative'>
        <DropdownMenu.Content
          className='text-md absolute right-[-10px] py-3 min-w-[250px] rounded-md shadow-[0px_5px_38px_-10px_rgba(33,_36,_39,_0.33),_0px_10px_20px_-15px_rgba(33,_36,_39,_0.33)] border-2 bg-artemis-white border-artemis-black will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-50'
          sideOffset={10}
          alignOffset={20}>
          <DropdownMenu.Item className='p-4 py-2 first-of-type:pt-2 pt-4 first-of-type:border-t-0 border-t-2 border-artemis-gray'>
            <p>Your post [post name] has a new comment!</p>
            <p>Click here to see it.</p>
            <p className='text-right mt-3 text-artemis-gray text-sm'>
              2023/05/11
            </p>
          </DropdownMenu.Item>
          <DropdownMenu.Item className='p-4 py-2 first-of-type:pt-2 pt-4 first-of-type:border-t-0 border-t-2 border-artemis-gray'>
            <p>Your post [post name] has a new comment!</p>
            <p>Click here to see it.</p>
            <p className='text-right mt-3 text-artemis-gray text-sm'>
              2023/05/11
            </p>
          </DropdownMenu.Item>
          <DropdownMenu.Item className='text-artemis-gray p-4 py-2 first-of-type:pt-2 pt-4 first-of-type:border-t-0 border-t-2 border-artemis-gray'>
            <p>The post you are following has an update.</p>
            <p>Click here to see it.</p>
            <p className='text-right mt-3 text-artemis-gray text-sm'>
              2023/05/11
            </p>
          </DropdownMenu.Item>
          <DropdownMenu.Item className='p-4 py-2 first-of-type:pt-2 pt-4 first-of-type:border-t-0 border-t-2 border-artemis-gray text-center text-artemis-gray'>
            <p>No new notifications...</p>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
