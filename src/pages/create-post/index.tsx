import React from 'react'
import Layout from '../components/Layout'
import { TPostCreateData, postService } from '../../lib/services/postService'
import { usePost } from '@/lib/hooks/usePost'
import { useAppSelector } from '@/lib/store/store'
import { selectAuth } from '@/lib/store/features/auth/authSlice'
import { useRouter } from 'next/router'
import { useToast } from '@/lib/hooks/useToast'

export default function CreatePost() {
  const [postData, setPostData] = React.useState<TPostCreateData>({
    title: '',
    location: '',
    shDesc: '',
    tags: '',
    image: '',
    lgDesc: ''
  })
  const [errorMessage, setErrorMessage] = React.useState('')
  const { createPost } = usePost()
  const auth = useAppSelector(selectAuth)
  const router = useRouter()
  const { addNewToast } = useToast()

  React.useEffect(() => {
    if (!auth.isLoggedIn) {
      addNewToast({ type: 'warning', message: 'Please sign in...' })
      router.push('/sign-in')
    }

    // eslint-disable-next-line
  }, [])

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedData = localStorage.getItem('postData')
      if (storedData !== null) {
        const parsedData = JSON.parse(storedData)
        setPostData(parsedData)
      }
    }
  }, [])

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('postData', JSON.stringify(postData))
    }
  }, [postData])

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setPostData(prevPostData => ({
      ...prevPostData,
      [name]: value
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrorMessage('')

    await createPost(postData).catch(err => {
      console.log(err)
    })
    // try {
    //   const response = await postService.createPost(postData)
    //   console.log(response)
    //   if (!response.success) {
    //     // TODO: change setErrorMessage to response.message
    //     // setErrorMessage(response.message)
    //     setErrorMessage('Something went wrong, try again.')
    //   } else {
    //     setPostData({
    //       title: '',
    //       location: '',
    //       shDesc: '',
    //       tags: '',
    //       image: '',
    //       lgDesc: ''
    //     })
    //   }
    // } catch (error) {
    //   console.error(error)
    // }
  }

  return (
    <Layout>
      <div className='mb-[150px] p-5 mt-10 flex flex-col mx-auto items-center max-w-[1000px] w-full'>
        <h2 className='text-5xl lg:text-6xl mb-8 mt-16 text-center'>
          Create Post
        </h2>
        <form
          className='flex flex-col md:flex-row flex-wrap gap-5 w-full justify-between'
          onSubmit={handleSubmit}>
          <div className='flex flex-col md:basis-5/12 justify-between'>
            <div className='flex flex-col'>
              <label
                htmlFor='title'
                className='font-bold'>
                Title
              </label>
              <input
                onChange={handleChange}
                className='border-2 border-artemis-black rounded p-2 mt-2 mb-4'
                type='text'
                id='title'
                name='title'
                value={postData.title}
                required
              />
            </div>

            <div className='flex flex-col'>
              <label
                htmlFor='location'
                className='font-bold'>
                Location
              </label>
              <input
                onChange={handleChange}
                className='border-2 border-artemis-black rounded p-2 mt-2 mb-4'
                type='text'
                id='location'
                name='location'
                value={postData.location}
                required
              />
            </div>

            <div className='flex flex-col'>
              <label
                htmlFor='shDesc'
                className='font-bold'>
                Short Description
              </label>
              <input
                onChange={handleChange}
                className='border-2 border-artemis-black rounded p-2 mt-2 mb-4'
                type='text'
                id='shDesc'
                name='shDesc'
                maxLength={200}
                value={postData.shDesc}
                required
              />
            </div>

            <div className='flex flex-col'>
              <label
                htmlFor='tags'
                className='font-bold'>
                Tags
              </label>
              <input
                onChange={handleChange}
                className='border-2 border-artemis-black rounded p-2 mt-2 mb-4'
                type='text'
                id='tags'
                name='tags'
                value={postData.tags}
              />
            </div>

            <div className='flex flex-col'>
              <label
                htmlFor='image'
                className='font-bold text-lg'>
                Image
              </label>
              <input
                onChange={handleChange}
                type='file'
                id='image'
                name='image'
                accept='image/*'
                className='rounded file:border-0 border-2 file:border-r-2 file:border-artemis-black border-artemis-black file:overflow-hidden file:bg-artemis-white file:color-artemis-black file:p-2 file:cursor-pointer file:mr-5 file:w-[40%] file:hover:bg-artemis-yellow file:ease-in-out file:duration-300 mt-2 mb-4'
              />
            </div>
          </div>

          <div className='flex flex-col md:basis-6/12'>
            <label
              htmlFor='lgDesc'
              className='font-bold text-lg'>
              Long Description
            </label>
            <textarea
              onChange={handleChange}
              className='border-2 border-artemis-black rounded p-2 mt-2 mb-4 h-full'
              id='lgDesc'
              name='lgDesc'
              rows={8}
              value={postData.lgDesc}
              required></textarea>
          </div>

          <div className='md:ml-auto md:flex-none flex items-start justify-end'>
            {errorMessage && (
              <div className='text-center mr-5 max-w-full md:max-w-[250px] lg:max-w-[340px] self-center'>
                <p className='text-artemis-red'>{errorMessage}</p>
              </div>
            )}
            <button
              className='min-w-max border-artemis-blue border-2 bg-artemis-blue py-2 px-4 text-artemis-white rounded hover:drop-shadow-lg ease-in-out duration-300'
              type='submit'>
              Create Post
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}
