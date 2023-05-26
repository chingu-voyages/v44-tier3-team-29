import { createSlice } from '@reduxjs/toolkit'
import { ISocketState } from './socketTypes'
import { socketReducers } from './socketReducers'
import { RootState } from '@store/store'

const initialState: ISocketState = {
  socket: undefined,
  uid: '',
  userSockets: []
}

const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: socketReducers
})

export const { updateSocket, updateUid, updateUserSockets, removeUserSocket } =
  socketSlice.actions
export const selectSocket = (state: RootState) => state.socket

export default socketSlice.reducer
