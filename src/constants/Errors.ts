
const API_ERROR = {

	INVALID_CITY: {
		type: 'INVALID_CITY',
		description: 'В выбранный город не доставвляем :/',
		code: 400,
	},
	INVALID_WEIGHT: {
		type: 'INVALID_WEIGHT',
		description: 'Неверный формат веса',
		code: 400,
	},
};

type ErrorKeys = keyof typeof API_ERROR;

export {
	API_ERROR,
	ErrorKeys
};
