import { useEffect, useRef } from 'react'
import io, { ManagerOptions, Socket, SocketOptions } from 'socket.io-client'

export const useSocket = (
  server: string,
  opts?: Partial<ManagerOptions & SocketOptions>
): Socket => {
  const { current: socket } = useRef(io(server, opts))

  useEffect(() => {
    return () => {
      if (socket) socket.close()
    }
  }, [socket])

  return socket
}
