import { Router } from "express";
const router = Router();

import { CitiesController } from '../Controllers';

router.get('/', (req, res) => {
    res.send("Home");
});

router.post('/cities', CitiesController.create);

export default router;