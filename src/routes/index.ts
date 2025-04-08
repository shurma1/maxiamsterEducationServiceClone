import express from 'express';
import ServiceController from "../controllers/service.controller";


const router = express.Router();

router.get('/products', ServiceController.getProducts);


export default router;
