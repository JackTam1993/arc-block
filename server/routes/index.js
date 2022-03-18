const middleware = require('@blocklet/sdk/lib/middlewares');
const router = require('express').Router();
const {
    getData
} = require('../middleware/txs')

router.use('/user', middleware.user(), (req, res) => res.json(req.user));
router.use('/txs', getData)

module.exports = router;