
const express   = require('express');
const router    = express.Router();

const loginService = require('../service/loginService');

router.post('/login', async (req, res) => {
    res.send(await loginService.login(req.body));
});

router.post('/user', async (req, res) => {
    res.send(await loginService.insert(req.body));
});

module.exports = router;
