import React from 'react'
import { TPostData } from '../../../lib/types/PostDataTypes'
import Image from "next/image"

export default function PostCard({ data }: {data: TPostData}) {
const { title, location, shDesc, tags, image, lgDesc } = data

  return (
    <div className="border-2 border-artemis-black rounded-md p-5 ">
      <div className="border-2 border-artemis-black rounded-md">
        <Image src={image} alt="" className="object-cover" width={300} height={200} />
      </div>
      <h3 className="text-3xl mt-2">{title}</h3>
      <span className="color-artemis-gray">{location}</span>
      <p>{shDesc}</p>
      
    </div>
  )
}
