import SyntheticDataService from "./syntheticData.service";
import {IRates} from "../types/IRates";
import {ApiError} from "../error/apiError";
import {DeliveryRateDto} from "../dtos/deliveryRate.dto";
import {ResponseStatus} from "../types/ResponseStatus";

class ServiceService {
	public async getProducts(){
		return SyntheticDataService.loadSyntheticJSON('products');
	}
	
	public async getCPULoad() {
		const min = 60;
		const max = 100;
		
		const random = Math.random();
		
		if(random < 0.05) return 0;
		
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	public async getCities() {
		return SyntheticDataService.loadSyntheticJSON('city');
	}
	
	public async calcDeliveryPrice(city: string, weight: number) {
		const rates = await SyntheticDataService.loadSyntheticJSON<IRates>('rates');
		
		const isCityExists = Object.keys(rates).includes(city);
		
		if( !isCityExists ) {
			throw ApiError.errorByType('INVALID_CITY');
		}
		
		if ( weight % 1 !== 0 || weight < 0) {
			return new DeliveryRateDto(0, 'Неверный вес груза', ResponseStatus.error);
		}
		
		if(weight > 10000000) {
			return new DeliveryRateDto(0, 'Слишком большой вес груза, не сможем доставить', ResponseStatus.error);
		}
		
		const price = rates[city].basePrice + rates[city].pricePerKg * weight;
		return new DeliveryRateDto(price, `Стоимость доставки в г. ${city} груза весом ${weight}кг равна ${price}руб.`, ResponseStatus.ok);
	}
}

export default new ServiceService();
