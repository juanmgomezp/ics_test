const Router = require('express').Router;
const path = require('path');
const PATH = require('../constants').PATH;
const fs = require('fs');

const CalendarRoute = Router();

/* const calendarList = [
    'bugambilias', 
    'areca',
    'chit',
    'bamboo',
    'mar'
];

const ical = require('ical-generator');

const calendar = ical({name: 'my first iCal'});
calendar.createEvent({
    start: new Date(),
    end: new Date(),
    summary: 'Example Event',
    description: 'It works ;)',
    location: 'my room',
    url: 'http://sebbo.net/'
}); */

CalendarRoute.get('/calendar', (req, res) => {
    const filename = 'basic.ics'
    res.set({
        'Content-Type': 'text/calendar',
        'Content-Disposition': `attachment; filename=${filename}`,
      });
})

/* calendarList.map(calendar => {
    CalendarRoute.get(`/calendar/${calendar}`, (req, res) => {
        const cal = PATH + '/calendars/basic.ics'
        res.contentType(path.basename(cal))
        console.log(res.contentType(path.basename(cal)))
        res.sendFile(cal, (err) => {
            if (err) console.log(err);
        })
    })
}); */

module.exports = CalendarRoute;