import { Router } from "express";
const router = Router();

router.get('/pessoas', (req, res) => {
    res.send("Pessoas");
});

router.post('/cidades', (req, res) => {
    console.log(req.body);
    res.send("Cidades");
})

export default router;