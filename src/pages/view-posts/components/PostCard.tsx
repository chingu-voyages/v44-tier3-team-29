import React from 'react'
import { TPostData } from '../../../lib/types/PostDataTypes'
import Image from 'next/image'
import Link from 'next/link'

const generateTagBorderColors = (array: string[]) => {
  const colors = [
    'border-artemis-green',
    'border-artemis-yellow',
    'border-artemis-blue'
  ]
  const borderColors = []
  for (let i = 0; i < array.length; i++) {
    borderColors.push(colors[i % colors.length])
  }
  return borderColors
}

export default function PostCard({ data }: { data: TPostData }) {
  const { title, location, shDesc, tags, image } = data
  // const formattedTags = tags.split(',').map(tag => tag.trim().toLowerCase())

  // const tagsHtml = formattedTags.map((tag, i) => {
  //   const borderColors = generateTagBorderColors(formattedTags)
  //   const style =
  //     'mr-2 my-1 border-2 py-0.5 px-2 px-2 rounded' + ' ' + borderColors[i]
  //   return (
  //     <li
  //       key={tag}
  //       className={style}>
  //       <Link href={tag}>#{tag}</Link>
  //     </li>
  //   )
  // })

  // Tags are already stored as an array but might need to be optimized further in the future
  const tagsHtml = tags.map((tag, i) => {
    const borderColors = generateTagBorderColors(tags)
    const style =
      'mr-2 my-1 border-2 py-0.5 px-2 px-2 rounded' + ' ' + borderColors[i]
    return (
      <li
        key={tag}
        className={style}>
        <Link href={tag}>#{tag}</Link>
      </li>
    )
  })

  /* eslint-disable @next/next/no-img-element */
  return (
    <div className='border-2 border-artemis-black rounded-md p-5 m-3'>
      <Link href='post_address'>
        <div className='border-2 border-artemis-black rounded'>
          <img
            alt=''
            src={image}
            className='object-cover'
            key={title}
            width={300}
            height={200}
            loading='lazy'
          />
        </div>
      </Link>
      <Link href='post_address'>
        <h3 className='text-3xl mt-2'>{title}</h3>
      </Link>
      <Link href={location}>
        <span className='color-artemis-gray opacity-50'>{location}</span>
      </Link>
      <p className='py-3 text-lg'>{shDesc}</p>
      <ul className='flex flex-wrap'>{tagsHtml}</ul>
    </div>
  )
}
