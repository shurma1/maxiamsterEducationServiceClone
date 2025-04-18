import express from 'express';
import ServiceController from "../controllers/service.controller";


const router = express.Router();

router.get('/products', ServiceController.getProducts);
router.get('/cpu', ServiceController.getCPULoad);
router.get('/city', ServiceController.getCities);
router.get('/delivery', ServiceController.getDeliveryPrice);

export default router;
