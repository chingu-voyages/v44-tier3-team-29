import React from 'react'
import Layout from '../components/Layout'
import PostCard from './components/PostCard'
import { TPostData } from '../../lib/types/PostDataTypes'

export default function ViewPosts() {
  const [postsData, setPostsData] = React.useState<TPostData[]>([
  {
   title: "Cat",
   location: "Seoul",
   shDesc: "Cute and small",
   tags: "Cat, small, hungry",
   image: "/images/placeholder-green.jpg",
   lgDesc: "Cute small cat, goes meow meow"
  }
  ])

  React.useEffect(() => {
    // fetch posts
  }, [])

  return (
    <Layout>
      <div className='mb-[150px] p-5 mt-10 flex flex-col items-center'>
        <h2 className='text-5xl lg:text-6xl mb-8 mt-16 text-center'>Posts</h2>
        {postsData.map((data, i) => <PostCard data={data} key={i}/>)}
      </div>
    </Layout>
  )
}
