import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function ActiveLink({ url, content }: { url: string, content: string }) {
  const router = useRouter()
  const style = router.asPath === url ? 'mx-3 [text-shadow:_0_0_10px_#8BC34A]' : 'mx-3 hover:[text-shadow:_0_0_10px_#8BC34A] ease-in-out duration-300'

  return (
    <Link
      href={url ?? ''}
      className={style}>
      {content}
    </Link>
  )
}