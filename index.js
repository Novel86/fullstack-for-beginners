import express from 'express';

const PORT = 5000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.status(200).json([{ status: res.statusCode }, req.query]);
});
app.post('/', (req, res) => {
	res.status(200).json(req.body);
});

app.listen(PORT, () => console.log(`server start on PORT: ${PORT}`));
