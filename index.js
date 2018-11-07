'user strict';
console.log('Hello world');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (reg, res )=> {
	res.send('HelollooooModified, bla in the house');
	console.log('server was called');
})

app.listen(3000);
/*, () => {
console.log('Example app listening to port 3000')
});*/
