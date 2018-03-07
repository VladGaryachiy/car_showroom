let express = require('express');
let bodyParser = require('body-parser');
let server = express();
let path = require('path');




server.use(express.static('public')); // доступ к файлам которые розположены в public
server.use(bodyParser.urlencoded({extended:true})); /*подключили body-parser*/
server.use(bodyParser.json());






// Get data


server.get('/carsData',require('./controllers/cars.js'));
server.get('/pickupsData',require('./controllers/pickups.js'));
server.get('/suvsData',require('./controllers/suvs.js'));
server.get('/vansData',require('./controllers/vans.js'));

server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
});

server.post('/test-drive',require('./controllers/testDrive.js'));


server.listen(8000);