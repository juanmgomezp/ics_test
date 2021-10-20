const Router = require('express').Router;
const generateCalendar = require('../controllers/calendar.controller')

const CalendarRoute = Router();

CalendarRoute.get('/:roomId/calendar/calendar.ics', generateCalendar)

module.exports = CalendarRoute;