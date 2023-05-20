import {
  removeUserSocket,
  updateSocket,
  updateUid,
  updateUserSockets
} from '@store/features/socket/socketSlice'
import { IAddToastPayload } from '@store/features/toasts/toastTypes'
import { AppDispatch } from '@store/store'
import { Socket } from 'socket.io-client'

export const initSocket = (
  socket: Socket,
  dispatch: AppDispatch,
  addNewToast: (payload: IAddToastPayload) => void
) => {
  socket.connect()

  dispatch(updateSocket(socket))

  startListeners(socket, dispatch, addNewToast)

  sendHandshake(socket, dispatch)
}

const startListeners = (
  socket: Socket,
  dispatch: AppDispatch,
  addNewToast: (payload: IAddToastPayload) => void
) => {
  socket.on('user_connected', (userSockets: string[]) => {
    console.info('User connected, new user list received.')
    dispatch(updateUserSockets(userSockets))
  })

  socket.on('user_disconnected', (socketId: string) => {
    console.info('User disconnected.')
    dispatch(removeUserSocket(socketId))
  })

  socket.on('system_message', (message: string) => {
    console.info('System message received>>>', message)

    const payload: IAddToastPayload = {
      type: 'info',
      message: message
    }
    addNewToast(payload)
  })

  socket.io.on('reconnect', attempt => {
    console.info('Reconnected on attempt>>>', attempt)
  })

  socket.io.on('reconnect_attempt', attempt => {
    console.info('Reconnection on attempt>>>', attempt)
  })

  socket.io.on('reconnect_error', error => {
    console.info('Reconnection error>>>', error)
  })

  socket.io.on('reconnect_failed', () => {
    console.info('Reconnection failed')
    alert('Unable to connect you to the server.')
  })
}

const sendHandshake = (socket: Socket, dispatch: AppDispatch) => {
  console.info('Sending handshake to the server...')

  socket.emit('handshake', (uid: string, userSockets: string[]) => {
    console.info('User handshake callback message received...')
    dispatch(updateUid(uid))
    dispatch(updateUserSockets(userSockets))
  })
}
