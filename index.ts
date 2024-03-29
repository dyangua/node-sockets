import Server from "./class/server";
import {router} from "./routes/routes";
import bodyParser from "body-parser";
import cors from 'cors';

const server  = new Server();
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json())
// cors
server.app.use(cors({origin:true, credentials:true}));
// routes
server.app.use('/', router);

server.start(() => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);
})