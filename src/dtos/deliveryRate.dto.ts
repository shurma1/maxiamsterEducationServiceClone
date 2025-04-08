import {ResponseStatus} from "../types/ResponseStatus";

export class DeliveryRateDto {
	price: number;
	message: string;
	status: ResponseStatus;
	
	constructor(
		price: number,
		message: string,
		status: ResponseStatus
	) {
		this.price = price;
		this.message = message;
		this.status = status;
	}
}
