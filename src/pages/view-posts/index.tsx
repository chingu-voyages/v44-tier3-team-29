import React from 'react'
import Layout from '../components/Layout'
import PostCard from './components/PostCard'
import { TPostData } from '../../lib/types/PostDataTypes'

// TODO: check if img is necessary when creating a post
const addPlaceholders = (data: TPostData[]) => {
  const placeholders = [
    '/images/placeholder-green.jpg',
    '/images/placeholder-yellow.jpg',
    '/images/placeholder-blue.jpg'
  ]
  let counter = 0
  for (let i = 0; i < data.length; i++) {
    if (counter < placeholders.length) {
      if (!data[i].image) {
        data[i].image = placeholders[counter]
        counter++
      }
    } else {
      counter = 0
    }
  }
  return data
}

export default function ViewPosts() {
  const [postsData, setPostsData] = React.useState<TPostData[]>([
    {
      title: 'Cat',
      location: 'Seoul',
      shDesc: 'Cute and small',
      tags: 'Cat, small, hungry',
      image: '',
      lgDesc: 'Cute small cat, goes meow meow'
    },
    {
      title: 'Cat',
      location: 'Seoul',
      shDesc: 'Cute and small',
      tags: 'Cat, small, hungry',
      image: '',
      lgDesc: 'Cute small cat, goes meow meow'
    },
    {
      title: 'Cat',
      location: 'Seoul',
      shDesc: 'Cute and small',
      tags: 'Cat, small, hungry',
      image: '',
      lgDesc: 'Cute small cat, goes meow meow'
    }
  ])

  addPlaceholders(postsData)

  React.useEffect(() => {
    // fetch posts
  }, [])

  return (
    <Layout>
      <div className='mb-[150px] p-5 mt-10 flex flex-col items-center'>
        <h2 className='text-5xl lg:text-6xl mb-8 mt-16 text-center'>Posts</h2>
        {postsData.map((data, i) => (
          <PostCard
            data={data}
            key={i}
          />
        ))}
      </div>
    </Layout>
  )
}
