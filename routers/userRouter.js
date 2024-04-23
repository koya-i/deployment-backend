import express from 'express';
import userControllers from '../controllers/userControllers.js';

const router=express.Router();
router.route('/')
.get(userControllers.getUsers)
.post(userControllers.createUser)
export default router;