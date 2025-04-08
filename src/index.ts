import express from 'express';
import routes from "./routes";
import cors from 'cors';
import {errorHandlingMiddleware} from "./middleware/errorHandling.middleware";

const app = express();

app.use(cors({
	origin: '*',
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
	allowedHeaders: ['Content-Type'],
}));

app.use(express.json());
app.use('/service', routes);
app.use(errorHandlingMiddleware);

const start = async () => {
	try{
		app.listen(8010, ()=> {
				console.log(`Server was started`)
			}
		)
		
	}
	catch (e){
		console.error(e);
	}
};

start();
