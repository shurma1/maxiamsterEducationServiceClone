import {NextFunction, Request, Response} from 'express';
import ServiceService from "../services/service.service";


class ServiceController {
	async getProducts(req: Request, res: Response, next: NextFunction) {
		try {
			const products = await ServiceService.getProducts();
			res.json(products);
			
		} catch (error) {
			next(error)
		}
	}
}

export default new ServiceController();
