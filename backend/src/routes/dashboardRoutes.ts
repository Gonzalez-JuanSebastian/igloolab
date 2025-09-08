import { Router } from 'express';
import { getDashboardStats, getSalesData, getProductStats } from '../controllers/dashboardController';

const router = Router();

router.get('/stats', getDashboardStats);
router.get('/sales-data', getSalesData);
router.get('/product-stats', getProductStats);

export default router;