export interface IRates {
	[key: string]: IRateOptions;
}

interface IRateOptions {
	basePrice: number;
	pricePerKg: number;
}
