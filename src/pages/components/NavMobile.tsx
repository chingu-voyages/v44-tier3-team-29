import React from 'react'
import NotificationMenu from './NotificationMenu'
import UserMenuMobile from './UserMenuMobile'
import MenuMobile from './MenuMobile'

export default function NavMobile({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <nav>
      {isLoggedIn && <NotificationMenu />}
      {isLoggedIn && <UserMenuMobile />}
      {!isLoggedIn && <MenuMobile />}
    </nav>
  )
}
