import cors from 'cors';
import express from 'express';
import fileUpload from 'express-fileupload';
import mongoose from 'mongoose';
import router from './router.js';

const PORT = 5000;
const DB_URL =
	'mongodb+srv://ramoalikulov77:user@cluster0.iwngb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const app = express();

app.use(
	cors({
		origin: 'http://127.0.0.1:5500',
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		allowedHeaders: ['Content-Type', 'Authorization'],
	})
);

app.use(express.json());
app.use(fileUpload({}));
app.use(express.static('static'));
app.use('/api', router);

async function startApp() {
	try {
		await mongoose.connect(DB_URL, {
			// useUnifiedTopology: true,
			// useNewUrlParser: true,
		});
		app.listen(PORT, () => console.log(`SERVER WORKED ${PORT}`));
	} catch (e) {
		console.log(e);
	}
}

startApp();
