import React from 'react'
import Layout from '../components/Layout'

export default function CreatePost() {
  return (
    <Layout>
      <div className='mb-[150px] relative z-[1] p-5 mt-10 flex flex-col items-center'>
        <h2 className='text-5xl lg:text-6xl mb-8 mt-16 text-center'>
          Create Post
        </h2>
        <form>
          <div>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" required />
          </div>

          <div>
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" required />
          </div>

          <div>
            <label htmlFor="short-description">Short Description:</label>
            <input type="text" id="short-description" name="short-description" maxLength="200" required />
          </div>

          <div>
            <label htmlFor="tags">Tags:</label>
            <input type="text" id="tags" name="tags" />
          </div>

          <div>
            <label htmlFor="file-upload">File Upload:</label>
            <input type="file" id="file-upload" name="file-upload" accept="image/*" />
          </div>

          <div>
            <label htmlFor="long-description">Long Description:</label>
            <textarea id="long-description" name="long-description" required></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  )
}
