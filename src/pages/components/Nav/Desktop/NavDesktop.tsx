import React from 'react'
import UserMenuDesktop from './UserMenuDesktop'
import SigninSignupDesktop from './SigninSignupDesktop'
import ActiveLink from './ActiveLink'
import { TMenuItems } from '../../../../lib/types/MenuItemTypes'

export default function NavDesktop({ isLoggedIn }: { isLoggedIn: boolean }) {
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
    <nav className='flex justify-between w-full text-sm lg:text-lg items-center translate-y-1'>
      <ul className='flex'>
        {menuItems.map(i => (
          <li key={i.href}>
            <ActiveLink
              url={i.href}
              content={i.content}
            />
          </li>
        ))}
      </ul>
      {isLoggedIn && <UserMenuDesktop />}
      {!isLoggedIn && <SigninSignupDesktop />}
    </nav>
  )
}
