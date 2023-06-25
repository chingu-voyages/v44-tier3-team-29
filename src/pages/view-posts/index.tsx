import React from 'react'
import Layout from '../components/Layout'
import PostCard from './components/PostCard'
import { TPostData } from '../../lib/types/PostDataTypes'
import { usePost } from '@/lib/hooks/usePost'

// TODO: check if img is necessary when creating a post
const addPlaceholders = (data: TPostData[]) => {
  const placeholders = [
    '/images/placeholder-cat-green.jpg',
    '/images/placeholder-cat-yellow.jpg',
    '/images/placeholder-cat-blue.jpg'
  ]
  for (let i = 0; i < data.length; i++) {
    if (!data[i].image) {
      data[i].image = placeholders[i % placeholders.length]
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
      tags: ['Cat, small, hungry'],
      image: '',
      lgDesc: 'Cute small cat, goes meow meow'
    },
    {
      title: 'Cat',
      location: 'Seoul',
      shDesc: 'Cute and small',
      tags: ['Cat, small, hungry'],
      image: '',
      lgDesc: 'Cute small cat, goes meow meow'
    },
    {
      title: 'Cat',
      location: 'Seoul',
      shDesc: 'Cute and small',
      tags: ['Cat, small, hungry'],
      image: '',
      lgDesc: 'Cute small cat, goes meow meow'
    },
    {
      title: 'Cat',
      location: 'Seoul',
      shDesc: 'Cute and small',
      tags: ['Cat, small, hungry'],
      image: '',
      lgDesc: 'Cute small cat, goes meow meow'
    },
    {
      title: 'Cat',
      location: 'Seoul',
      shDesc: 'Cute and small',
      tags: ['Cat, small, hungry'],
      image: '',
      lgDesc: 'Cute small cat, goes meow meow'
    }
  ])
  const { getAllPosts } = usePost()

  React.useEffect(() => {
    fetchPosts()

    // eslint-disable-next-line
  }, [])

  async function fetchPosts() {
    const data = await getAllPosts().catch(err => console.log(err))

    if (!data) return

    const postsWithImage = addPlaceholders(data.posts)
    console.log(postsWithImage)
    setPostsData(postsWithImage)
  }

  return (
    <Layout>
      <div className='mb-[150px] p-5 mt-10 flex flex-col items-center'>
        <h2 className='text-5xl lg:text-6xl mb-8 mt-16 text-center'>Posts</h2>
        <div className='grid md:grid-cols-3 justify-center'>
          {postsData.map((data, i) => (
            <PostCard
              data={data}
              key={i}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}
