const Router = require('express').Router;
const path = require('path');
const PATH = require('../constants').PATH;
const fs = require('fs');

const CalendarRoute = Router();

const eol = "\r\n";
const content = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//hacksw/handcal//NONSGML v1.0//EN
METHOD:PUBLISH
BEGIN:VEVENT
UID:20211015T172345Z-AF23B2@nasa.com
DTSTAMP:20211015T172345Z
DTSTART:20211016T170000Z
DTEND:20211017T040000Z
SUMMARY:Test Event
END:VEVENT
BEGIN:VEVENT
UID:20211018T112345Z-AF23B2@nasa.com
DTSTAMP:20211018T112345Z
DTSTART:20211019T180000Z
DTEND:20211021T160000Z
SUMMARY:Test Event 777
END:VEVENT
END:VCALENDAR
`;

console.log(content);

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