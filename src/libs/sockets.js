import io from 'socket.io-client';

export const socket = io('http://localhost:8080')

export const joinRoom = (userId, roomId) =>{
  socket.emit('joinRoom', {
    userId, roomId
  })
}
export const turn = (array) =>{
  socket.emit('turn', {board : array})
}

export const listenToTurn = () =>{
  socket.on('turn', (data) =>{
    console.log(data)
  })
}




