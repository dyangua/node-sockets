import {Request, Response, Router} from 'express'
import Server from "../class/server";

export const router = Router();

router.get('/message', (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: 'Todo is good'
    })
});

router.post('/message', (req: Request, res: Response) => {
    const from = req.body.from;
    const body = req.body.body;
    const payload = {
        from,
        body
    }

    const server = Server.instance;
    server.io.emit('new-message', payload)

    res.json({
        ok: true,
        from,
        body
    })
});

router.post('/message/:id', (req: Request, res: Response) => {
    const from = req.body.from;
    const body = req.body.body;
    const id = req.params.id;
    const payload = {
        body,
        from,
    }
    const server = Server.instance;
    server.io.in(id).emit('message-private', payload);

    res.json({
        ok: true,
        body,
        from,
        id
    })
});