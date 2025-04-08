import express from 'express';
import routes from "./routes";
import {errorHandlingMiddleware} from "./middleware/errorHandling.middleware";

const app = express();

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
