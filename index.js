const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors()); //set headers to allow cross origin access. get rid of it for production.
// app.use('/api',cors());


app.get('/api/get-stuff', (req, res) => {
	res.send({
		success: true,
		message: 'Here is some stuff from the back-end'
	});
});

app.get('/', (req, res) => {
	res.send('<h1>working again and again</h1>')
})

app.listen(PORT, ()=>{
	console.log('Server running on PORT:' + PORT);
})
