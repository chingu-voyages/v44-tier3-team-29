import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { ISocketState, TSocketPayload } from './socketTypes'
import { Socket } from 'socket.io-client'

const updateSocket: CaseReducer<ISocketState, PayloadAction<TSocketPayload>> = (
  state,
  action
) => {
  return { ...state, socket: action.payload as Socket }
}

const updateUid: CaseReducer<ISocketState, PayloadAction<TSocketPayload>> = (
  state,
  action
) => {
  return { ...state, uid: action.payload as string }
}

const updateUserSockets: CaseReducer<
  ISocketState,
  PayloadAction<TSocketPayload>
> = (state, action) => {
  return { ...state, userSockets: action.payload as string[] }
}

const removeUserSocket: CaseReducer<
  ISocketState,
  PayloadAction<TSocketPayload>
> = (state, action) => {
  return {
    ...state,
    userSockets: state.userSockets.filter(
      socketId => socketId !== (action.payload as string)
    )
  }
}

export const socketReducers = {
  updateSocket,
  updateUid,
  updateUserSockets,
  removeUserSocket
}
