import axios from 'axios'

export type TPostCreateData = {
  title: string
  location: string
  shDesc: string
  tags: string
  image: string
  lgDesc: string
}

export type TPostEditData = Partial<TPostCreateData>

const BASE_URL = process.env.NEXT_PUBLI_API_URL ?? 'http://localhost:3000'

export const postService = {
  getAllPosts: async () => {
    try {
      const res = await axios.get(BASE_URL + '/api/posts')

      return res.data
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err.status)
        console.error(err.response)
      } else {
        console.error(err)
      }

      return { success: false, message: err }
    }
  },

  getPostsByUserId: async (userId: string) => {
    try {
      const res = await axios.get(BASE_URL + '/api/posts', {
        params: {
          user_id: userId
        }
      })

      return res.data
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err.status)
        console.error(err.response)
      } else {
        console.error(err)
      }

      return { success: false, message: err }
    }
  },

  getPostByPostId: async (postId: string) => {
    try {
      const res = await axios.get(BASE_URL + '/api/posts', {
        params: {
          post_id: postId
        }
      })

      return res.data
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err.status)
        console.error(err.response)
      } else {
        console.error(err)
      }

      return { success: false, message: err }
    }
  },

  createPost: async (data: TPostCreateData) => {
    try {
      const res = await axios.post(BASE_URL + '/api/posts', data)

      return res.data
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err.status)
        console.error(err.response)
      } else {
        console.error(err)
      }

      return { success: false, message: err }
    }
  },

  editPost: async (postId: string, data: TPostEditData) => {
    try {
      const res = await axios.patch(BASE_URL + '/api/posts', data, {
        params: {
          post_id: postId
        }
      })

      return res.data
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err.status)
        console.error(err.response)
      } else {
        console.error(err)
      }

      return { success: false, message: err }
    }
  },

  deletePost: async (postId: string) => {
    try {
      const res = await axios.delete(BASE_URL + '/api/posts', {
        params: {
          post_id: postId
        }
      })

      return res.data
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err.status)
        console.error(err.response)
      } else {
        console.error(err)
      }

      return { success: false, message: err }
    }
  }
}
