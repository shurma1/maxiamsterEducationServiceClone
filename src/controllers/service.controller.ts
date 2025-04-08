import {NextFunction, Request, Response} from 'express';
import ServiceService from "../services/service.service";
import {ApiError} from "../error/apiError";


class ServiceController {
	async getProducts(req: Request, res: Response, next: NextFunction) {
		try {
			const products = await ServiceService.getProducts();
			res.json(products);
			
		} catch (error) {
			next(error)
		}
	}
	
	async getCPULoad(req: Request, res: Response, next: NextFunction) {
		try {
			const cpuLoad = await ServiceService.getCPULoad();
			res.send(cpuLoad);
			
		} catch (error) {
			next(error)
		}
	}
	
	async getCities(req: Request, res: Response, next: NextFunction) {
		try {
			const cities = await ServiceService.getCities();
			res.json(cities);
			
		} catch (error) {
			next(error)
		}
	}
	
	async getDeliveryPrice(req: Request, res: Response, next: NextFunction) {
		try {
			let {
				city,
				weight
			} = req.query;
			
			
			const weightNumber = parseInt(weight as string);

			if(isNaN(weightNumber)) {
				throw ApiError.errorByType('INVALID_WEIGHT');
			}
			
			const deliveryRate = await ServiceService.calcDeliveryPrice(city as string, weightNumber);
			res.json(deliveryRate);
			
		} catch (error) {
			next(error)
		}
	}
}

export default new ServiceController();
