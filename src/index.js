const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const server = express();
const calendarRoute = require('./routes/calendar.routes');

server.get('/', (req, res) => {
    res.json('Hello World');
});

server.use(morgan('dev'));
/* server.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
})) */

server.use('/ical', calendarRoute);

server.listen(8080, () => {
    console.log('Server on port: ', 8080);
});