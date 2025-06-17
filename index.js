import express from 'express';

const PORT = 5000;

const app = express();

app.get('/', (req, res) => {
	res.status(200).json('Server start succesfully!!!');
});

app.listen(PORT, () => console.log(`server start on PORT: ${PORT}`));
