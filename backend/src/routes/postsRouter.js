const { Router } = require('express');
const router = Router();
const { listPosts, storePost, findPosts, listPostsByUser } = require('../controllers/postsController')

router.get('/posts', listPosts);
router.get('/posts/:id', listPostsByUser);
router.post('/create', storePost);
router.get('/find/:id', findPosts);

module.exports = router;