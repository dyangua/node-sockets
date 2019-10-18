import express from 'express';
import {SERVER_PORT} from "../global/enviroments";
import socketIO from 'socket.io'
import http from 'http'

export default class Server {
    private static _instance: Server;
    public app: express.Application;
    public port: number;
    public io: socketIO.Server;
    private readonly httpServer: http.Server;

    constructor() {
        this.app = express();
        this.port = SERVER_PORT;
        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer)
        this.listenSockets();
    }

    private listenSockets() {
        console.log('Escuchando conexiones');
        this.io.on('connection', client => {
            console.log('cliente conectado')
        });
    }

    public static get instance() {
        return this._instance || (this._instance = new Server())
    }

    start(callback: any) {
        this.httpServer.listen(this.port, callback);
    }

}