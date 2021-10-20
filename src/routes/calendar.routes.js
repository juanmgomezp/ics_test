const Router = require('express').Router;
const generateCalendar = require('../controllers/calendar.controller')

const CalendarRoute = Router();

CalendarRoute.get('/:roomId', generateCalendar)

module.exports = CalendarRoute;