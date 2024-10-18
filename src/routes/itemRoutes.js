import express from 'express';
import { getAllItems, addItem, markAsPurchased, deleteItem } from '../controllers/itemController.js';

const router = express.Router();

router.get('/', getAllItems);
router.post('/', addItem);
router.put('/:id', markAsPurchased);
router.delete('/:id', deleteItem);

export default router;