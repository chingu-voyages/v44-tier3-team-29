import axios from 'axios'
import axiosInstance from './authHeader'

export type TPostCreateData = {
  title: string
  location: string
  shDesc: string
  tags: string
  image: string
  lgDesc: string
}

export type TPostEditData = Partial<TPostCreateData>

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000'

export const postService = {
  getAllPosts: async () => {
    try {
      const res = await axiosInstance.get(BASE_URL + '/api/posts')

      return res.data
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) {
          return { success: false, message: 'Please sign in your account...' }
        } else {
          return { success: false, message: err.message }
        }
      } else {
        return { success: false, message: 'Sozz something went wrong...' }
      }
    }
  },

  getPostsByUserId: async (userId: string) => {
    try {
      const res = await axiosInstance.get(BASE_URL + '/api/posts', {
        params: {
          user_id: userId
        }
      })

      return res.data
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return { success: false, message: err.message }
      } else {
        return { success: false, message: 'Sozz something went wrong...' }
      }
    }
  },

  getPostByPostId: async (postId: string) => {
    try {
      const res = await axiosInstance.get(BASE_URL + '/api/posts', {
        params: {
          post_id: postId
        }
      })

      return res.data
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return { success: false, message: err.message }
      } else {
        return { success: false, message: 'Sozz something went wrong...' }
      }
    }
  },

  createPost: async (data: TPostCreateData) => {
    try {
      const res = await axiosInstance.post(BASE_URL + '/api/posts', data)

      return res.data
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return { success: false, message: err.message }
      } else {
        return { success: false, message: 'Sozz something went wrong...' }
      }
    }
  },

  editPost: async (postId: string, data: TPostEditData) => {
    try {
      const res = await axiosInstance.patch(BASE_URL + '/api/posts', data, {
        params: {
          post_id: postId
        }
      })

      return res.data
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return { success: false, message: err.message }
      } else {
        return { success: false, message: 'Sozz something went wrong...' }
      }
    }
  },

  deletePost: async (postId: string) => {
    try {
      const res = await axiosInstance.delete(BASE_URL + '/api/posts', {
        params: {
          post_id: postId
        }
      })

      return res.data
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return { success: false, message: err.message }
      } else {
        return { success: false, message: 'Sozz something went wrong...' }
      }
    }
  }
}
