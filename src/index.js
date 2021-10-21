const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

//requerimos la conexión a la base de datos
require('./database');

const server = express();
const calendarRoute = require('./routes/calendar.routes');
const reservationRoute = require('./routes/reservation.routes');

server.get('/', (req, res) => {
    res.json('Hello World');
});

server.use(morgan('common'));
server.use(express.json());
/* server.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
})) */

server.use('/ical', calendarRoute);
server.use('/api', reservationRoute);

server.listen(8080, () => {
    console.log('Server on port: ', 8080);
});