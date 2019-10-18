import {Request, Response, Router} from 'express'

export const router = Router();

router.get('/message', (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: 'Todo is good'
    })
});

router.post('/message', (req: Request, res: Response) => {
    const name = req.body.name;
    res.json({
        ok: true,
        message: `Todo is good POST ${name}`
    })
});

router.post('/message/:id', (req: Request, res: Response) => {
    const name = req.body.name;
    const id = req.params.id;

    res.json({
        ok: true,
        message: `Todo is good POST ${name}`,
        id,
    })
});