import express from 'express';

const app = express();

app.use(express.json());


const start = async () => {
	try{
		app.listen(8000, ()=> {
				console.log(`Server was started`)
			}
		)
		
	}
	catch (e){
		console.error(e);
	}
};

start();
