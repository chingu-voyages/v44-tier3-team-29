import { useRouter } from 'next/router'
import {
  TPostCreateData,
  TPostEditData,
  postService
} from '../services/postService'
import { selectAuth } from '../store/features/auth/authSlice'
import { useAppSelector } from '../store/store'
import { useToast } from './useToast'

export const usePost = () => {
  const router = useRouter()
  const { addNewToast } = useToast()
  const user = useAppSelector(selectAuth).user

  const getAllPosts = async () => {
    const res = await postService.getAllPosts()

    if (!res.success) {
      addNewToast({ type: 'warning', message: res.message })
      return
    }

    return res.message
  }

  const getMyPosts = async () => {
    if (!user) {
      addNewToast({ type: 'warning', message: 'Please sign in...' })
      return
    }

    const res = await postService.getPostsByUserId(user.uid)

    if (!res.success) {
      addNewToast({ type: 'warning', message: res.message })
      return
    }

    return res.message
  }

  const getPostsByUserId = async (userId: string) => {
    const res = await postService.getPostsByUserId(userId)

    if (!res.success) {
      addNewToast({ type: 'warning', message: res.message })
      return
    }

    return res.message
  }

  const getPostByPostId = async (postId: string) => {
    const res = await postService.getPostByPostId(postId)

    if (!res.success) {
      addNewToast({ type: 'warning', message: res.message })
      return
    }

    return res.message
  }

  const createPost = async (data: TPostCreateData) => {
    const res = await postService.createPost(data)

    if (res.success) {
      addNewToast({
        type: 'success',
        message: 'Post has been created successfully.'
      })

      const localPostData = localStorage.getItem('postData')
      if (typeof window !== 'undefined' && localPostData) {
        localStorage.removeItem('postData')
      }

      router.push('/')
    } else {
      addNewToast({ type: 'warning', message: res.message })
    }
  }

  const editPost = async (postId: string, data: TPostEditData) => {
    const res = await postService.editPost(postId, data)

    if (res.success) {
      addNewToast({
        type: 'success',
        message: 'Post has been updated successfully.'
      })
    } else {
      addNewToast({ type: 'warning', message: res.message })
    }
  }

  const deletePost = async (postId: string) => {
    const res = await postService.deletePost(postId)

    if (res.success) {
      addNewToast({
        type: 'success',
        message: 'Post has been deleted successfully.'
      })
    } else {
      addNewToast({ type: 'warning', message: res.message })
    }
  }

  return {
    getAllPosts,
    getMyPosts,
    getPostByPostId,
    getPostsByUserId,
    createPost,
    editPost,
    deletePost
  }
}
