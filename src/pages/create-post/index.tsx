import React, { useState } from 'react'
import Layout from '../components/Layout'

type TFormData = {
  title: string, 
  location: string, 
  shortDescription: string, 
  tags: string[], 
  longDescription: string
}

export default function CreatePost() {
    const [formData, setFormData] = React.useState<TFormData>(
        {title: "", location: "", shortDescription: "", tags: [], longDescription: ""}
    )

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = event.target

    if (name === "tags") {
      const tagsArray = value.split(",").map(tag => tag.trim())
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: tagsArray,
      }))
    } else {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value,
      }))
    }
  } 

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    return
  }

  return (
    <Layout>
      <div className='mb-[150px] p-5 mt-10 flex flex-col mx-auto items-center max-w-[1000px] w-full'>
        <h2 className='text-5xl lg:text-6xl mb-8 mt-16 text-center'>
          Create Post
        </h2>
        <form className="flex flex-col md:flex-row flex-wrap gap-5 w-full justify-between" onSubmit={handleSubmit}>
          <div className="flex flex-col md:basis-5/12 justify-between">
            <div className="flex flex-col">
              <label htmlFor="title" className="font-bold">Title</label>
              <input onChange={handleChange} className="border-2 border-artemis-black rounded p-2 mt-2 mb-4" type="text" id="title" name="title" value={formData.title} required />
            </div>

            <div className="flex flex-col">
              <label htmlFor="location" className="font-bold">Location</label>
              <input onChange={handleChange} className="border-2 border-artemis-black rounded p-2 mt-2 mb-4" type="text" id="location" name="location" value={formData.location} required />
            </div>

            <div className="flex flex-col">
              <label htmlFor="shortDescription" className="font-bold">Short Description</label>
              <input onChange={handleChange} className="border-2 border-artemis-black rounded p-2 mt-2 mb-4" type="text" id="shortDescription" name="shortDescription" maxLength={200} value={formData.shortDescription} required />
            </div>

            <div className="flex flex-col">
              <label htmlFor="tags" className="font-bold">Tags</label>
              <input onChange={handleChange} className="border-2 border-artemis-black rounded p-2 mt-2 mb-4" type="text" id="tags" name="tags" value={formData.tags} />
            </div>

            <div className="flex flex-col">
              <label htmlFor="file-upload" className="font-bold text-lg">Image</label>
              <input type="file" id="file-upload" name="file-upload" accept="image/*" className="rounded file:border-0 border-2 file:border-r-2 file:border-artemis-black border-artemis-black file:overflow-hidden file:bg-artemis-white file:color-artemis-black file:p-2 file:cursor-pointer file:mr-5 file:w-[40%] file:hover:bg-artemis-yellow file:ease-in-out file:duration-300 mt-2 mb-4" />
            </div>
          </div>

          <div className="flex flex-col md:basis-6/12">
            <label htmlFor="longDescription" className="font-bold text-lg">Long Description</label>
            <textarea onChange={handleChange} className="border-2 border-artemis-black rounded p-2 mt-2 mb-4 h-full"  id="longDescription" name="longDescription" rows={8} value={formData.longDescription} required></textarea>
          </div>

          <button className="md:ml-auto md:flex-none border-artemis-blue border-2 bg-artemis-blue py-2 px-4 text-artemis-white rounded hover:drop-shadow-lg ease-in-out duration-300" type="submit">Create Post</button>
        </form>
      </div>
    </Layout>
  )
}
