let express = require('express');
let bodyParser = require('body-parser');
let server = express();


server.use(express.static('public')); // доступ к файлам которые розположены в public
server.use(bodyParser.urlencoded({extended:true})); /*подключили body-parser*/
server.use(bodyParser.json());





// Get data


server.get('/cars',require('./controllers/cars.js'));
server.get('/pickups',require('./controllers/pickups.js'));
server.get('/suvs',require('./controllers/suvs.js'));
server.get('/vans',require('./controllers/vans.js'));



server.listen(8001);