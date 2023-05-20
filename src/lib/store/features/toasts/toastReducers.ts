import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { IAddToastPayload, IToastListState, TToastPayload } from './toastTypes'
import { v4 } from 'uuid'

export const addToast: CaseReducer<
  IToastListState,
  PayloadAction<IAddToastPayload>
> = (state, action) => {
  const { type, message } = action.payload
  const toaster = {
    uid: v4(),
    type: type,
    message: message
  }

  return { toasters: [...state.toasters, toaster] }
}

export const removeToast: CaseReducer<
  IToastListState,
  PayloadAction<string>
> = (state, action) => {
  return {
    toasters: state.toasters.filter(t => t.uid !== action.payload)
  }
}

export const toastReducers = { addToast, removeToast }
