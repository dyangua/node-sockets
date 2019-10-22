import socketIO, {Socket} from "socket.io";
import {UserList} from "../class/user-list";
import {Usuario} from "../class/usuario";


export const connectClient = (client: Socket) => {
    const user = new Usuario(client.id);
    userConnects.add(user);
}

export const disconnect = (client: Socket) => {
    client.on('disconnect', () => {
        console.log('======= DELETE USER ========');
        console.log(userConnects.deleteUser(client.id));
    })
}


export const message = (client: Socket, io: socketIO.Server) => {
    client.on('message', (payload) => {
        console.log(`Message receive`)
        console.log(payload)
        io.emit('message-new', payload);
    })
}


export const user = (client: Socket, io: socketIO.Server) => {
    client.on('configUser', ({name}, callback: Function) => {
        userConnects.updateUser(client.id, name);
        callback({
            ok: true,
            message: `Usuario ${name}, configurado`
        })
    })
}

export const userConnects = new UserList();