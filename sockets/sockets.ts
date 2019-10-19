import socketIO, {Socket} from "socket.io";

export const disconnect = (client: Socket) => {
    client.on('disconnect', () => {
        console.log('Client Disconnect')
    })
}

export const message = (client: Socket, io: socketIO.Server) => {
    client.on('message', (payload) => {
        console.log(`Message receive`)
        console.log(payload)
        io.emit('message-new', payload);
    })
}

