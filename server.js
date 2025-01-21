const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let counter = 0;

app.post('/check', (req, res) => {
	counter++;

	res.status(200).send(`Post call received ${counter} times`);
});

app.listen(port, () => {
	console.log('Server running on port ', port);
});
