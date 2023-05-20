import { Socket } from 'socket.io-client'

export interface ISocketState {
  socket: Socket | undefined
  uid: string
  userSockets: string[]
}

export type TSocketPayload = string | string[] | Socket
