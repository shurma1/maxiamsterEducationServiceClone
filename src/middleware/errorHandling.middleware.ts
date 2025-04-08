import {NextFunction, Request, Response} from 'express';
import {ApiError} from '../error/apiError';


const errorHandlingMiddleware = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if(err instanceof ApiError){
		return res.status(err.code).json({
			type: err.type,
			description: err.description,
			code: err.code,
		});
	}

	res.status(500).json({
		type: 'UNKNOWN_ERROR',
		code: 500,
	});
};

export {
	errorHandlingMiddleware
};
