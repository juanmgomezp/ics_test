const Router = require('express').Router;

const CalendarRoute = Router();

const eol = "\r\n";
const content = `
BEGIN:VCALENDAR${eol}VERSION:2.0${eol}PRODID:-//hacksw/handcal//NONSGML v1.0//EN${eol}METHOD:PUBLISH${eol}BEGIN:VEVENT
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

//const content = calendar.replace(["\r\n", "\r", "\n"], "\r\n");
console.log(content);
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

    res.send(content.toString());
    console.dir(res.get('content-type'));
})

CalendarRoute.post('/calendar/calendar.ics', (req, res) => {
    res.set({
        'content-type':`text/calendar; method=PUBLISH; charset=utf-8`,
        'Mime-Version':'1.0',
        'Content-Transfer-Encoding': 'quoted-printable',
        'content-disposition': 'inline; filename=calendar.ics',
        'x-content-type-options': 'nosniff',
        'x-xss-protection': '0',
        'x-frame-options': 'SAMEORIGIN'
    });
    res.send(content);
    console.dir(res.get('content-type'));
})

module.exports = CalendarRoute;