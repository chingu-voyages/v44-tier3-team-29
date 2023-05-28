import { createSlice } from '@reduxjs/toolkit'
import { toastReducers } from './toastReducers'
import { IToastListState } from './toastTypes'
import { RootState } from '@store/store'

const initialState: IToastListState = {
  toasters: []
}

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: toastReducers
})

export const { addToast, removeToast } = toastSlice.actions
export const selectToastList = (state: RootState) => state.toastList

export default toastSlice.reducer
