import { selectSocket } from '@store/features/socket/socketSlice'
import { useAppSelector } from '@store/store'
const Socket: React.FC = () => {
  const { socket, uid, userSockets } = useAppSelector(selectSocket)

  return socket ? (
    <>
      <h1>Socket Info</h1>
      <p>
        UserId: <strong>{uid}</strong>
      </p>
      <p>
        Users online: <strong>{userSockets.length}</strong>
      </p>
      <p>
        SocketId: <strong>{socket?.id}</strong>
      </p>
    </>
  ) : (
    <p>Loading...</p>
  )
}

export default Socket
