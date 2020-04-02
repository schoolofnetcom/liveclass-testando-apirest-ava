import { Router } from 'express';
import Task from './../schema/task';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find({});
        return res.status(200).json({ tasks });
    } catch (err) {
        return res.status(500).json({ err });
    }    
});

router.post('/', async (req, res) => {
    try {
        const task = await Task.create(req.body);
        return res.status(201).json({ task });
    } catch (err) {
        return res.status(500).json({ err });
    }
});

export default router;