import { addToast, removeToast } from '@store/features/toasts/toastSlice'
import { IAddToastPayload } from '@store/features/toasts/toastTypes'
import { useAppDispatch } from '@store/store'

export const useToast = () => {
  const dispatch = useAppDispatch()

  const addNewToast = (payload: IAddToastPayload) => {
    dispatch(addToast(payload))
  }

  const removeTargetToast = (uid: string) => {
    dispatch(removeToast(uid))
  }
  return {
    addNewToast,
    removeTargetToast
  }
}
