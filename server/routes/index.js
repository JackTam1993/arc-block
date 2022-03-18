const middleware = require('@blocklet/sdk/lib/middlewares');
const router = require('express').Router();

router.use('/user', middleware.user(), (req, res) => res.json(req.user));
router.use('/txs', (req, res) => res.json({
    h: 1
}))

module.exports = router;