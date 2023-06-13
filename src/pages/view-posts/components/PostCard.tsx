import React from 'react'
import { TPostData } from '../../../lib/types/PostDataTypes'
import Image from "next/image"
import Link from "next/link"

const generateTagBorderColors = (array: string[]) => {
  const colors = ["border-artemis-green", "border-artemis-yellow", "border-artemis-blue"];
  const borderColors = [];
  for (let i = 0; i < array.length; i++) {
    borderColors.push(colors[i % colors.length]);
  }
  return borderColors;
};

export default function PostCard({ data }: {data: TPostData}) {
  const { title, location, shDesc, tags, image } = data;
  const formattedTags = tags.split(",").map(tag => tag.trim().toLowerCase());

  const tagsHtml = formattedTags.map((tag, i) => {
          const borderColors = generateTagBorderColors(formattedTags);
          const style = "mr-2 border-2 py-0.5 px-2 px-2 rounded" + " " + borderColors[i];
          return (<li key={tag} className={style}><Link href={tag}>#{tag}</Link></li>)
  })

  return (
    <div className="border-2 border-artemis-black rounded-md p-5 ">
      <div className="border border-artemis-black rounded">
        <Image src={image} alt="" className="object-cover " width={300} height={200} />
      </div>
      <h3 className="text-3xl mt-2">{title}</h3>
      <span className="color-artemis-gray opacity-50">{location}</span>
      <p className="py-3 text-lg">{shDesc}</p>
      <ul className="flex">{tagsHtml}</ul>
    </div>
  )
}
