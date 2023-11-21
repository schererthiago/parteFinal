const { Router } = require('express');
const router = Router();
const { listUsers, storeUser, findUsers } = require('../controllers/usersController')

router.get('/users', listUsers);
router.post('/user/create', storeUser);
router.get('/user/:id', findUsers);

module.exports = router;