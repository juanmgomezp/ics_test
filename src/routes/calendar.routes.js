const Router = require('express').Router;
const ical = require('ical-generator');

const CalendarRoute = Router();

const cal = ical({
    prodId: '//superman-industries.com//ical-generator//EN',
    method: 'PUBLISH',
    name: 'Test Calendar',
    events: [
        {
            start: new Date('2021-10-22 12:00:00'),
            end: new Date('2021-10-24 11:00:00'),
            summary: 'Example Event',
            description: 'It works ;)',
            url: 'https://example.com'
        }
    ]
});

console.log(cal);

CalendarRoute.get('/calendar/calendar.ics', (req, res) => {
    res.set({
        'content-type':'text/calendar; method=PUBLISH; charset=utf-8',
        'Mime-Version':'1.0',
        'Content-Transfer-Encoding': 'quoted-printable',
        'content-disposition': 'inline; filename=calendar.ics',
        'x-content-type-options': 'nosniff',
        'x-xss-protection': '0',
        'x-frame-options': 'SAMEORIGIN'
    });

    cal.serve(res);
})

module.exports = CalendarRoute;