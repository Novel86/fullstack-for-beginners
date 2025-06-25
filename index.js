import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import Post from './Post.js';
import router from './router.js';
import fileUpload from 'express-fileupload';

console.log(
	`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.bwsvjlc.mongodb.net/?retryWrites=true&w=majority&appName=backendForBeginners`
);

const PORT = process.env.PORT;
const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.bwsvjlc.mongodb.net/?retryWrites=true&w=majority&appName=backendForBeginners`;

const app = express();

app.use(express.json());
app.use(fileUpload({}));
app.use('/api', router);

async function startApp() {
	try {
		await mongoose.connect(DB_URL);

		app.listen(PORT, () => console.log(`server start on PORT: ${PORT}`));
	} catch (error) {
		console.log(error);
	}
}
startApp();
