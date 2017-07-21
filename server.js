const express = require('express');
const app = express();

app.use(express.static('static/'));

app.listen(4321, function(){
	console.log('Listening to http://localhost:4321');
});