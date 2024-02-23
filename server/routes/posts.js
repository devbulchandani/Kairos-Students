import express from 'express';
import { deletePost, getFeedPosts, getUserPosts, likePosts } from '../controllers/posts.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

//Read
router.get('/', verifyToken, getFeedPosts);
router.get('/:userId/posts', verifyToken, getUserPosts);
// router.get('/latest', verifyToken, getUpdatedPosts);


//Update

router.patch('/:id/like', verifyToken, likePosts);

//Delete
router.delete('/:id/delete', verifyToken, deletePost)

export default router;