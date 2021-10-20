const Rooms = require('../models/rooms');
const Reservations = require('../models/reservations');
const ical = require('ical-generator');

const generateCalendar = async (req, res) => {
    try {
        const roomId = req.params.roomId;
        const roomFounded = await Rooms.findById(roomId)
    
        if(!roomFounded) return res.status(500).json({msg: 'invalid url'});    

        const reservations = await Reservations.find({room: roomId});
        
        let events = [];

        if(reservations.length > 0){
            reservations.map(item => {
                let event = {
                    start: new Date(item.start),
                    end: new Date(item.end),
                    sequence: 1,
                    id: item.id,
                    summary: item.guest,
                    description: `Reservation for ${item.guest}`,                
                    ur: 'https://www.otl.io'                    
                }
                events.push(event);
            });
        }

        const cal = ical({
            prodId: `//${roomId}//otl.io//EN`, 
            method: 'PUBLISH',
            name: `${roomFounded.name}`,
            ttl: 60,
            events: events
        });
        
        res.set({
            'content-type':'text/calendar; method=PUBLISH; charset=utf-8',
            'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
            'pragma': 'no-cache',
            'content-disposition': 'inline; filename=calendar.ics',
        });
        
        cal.serve(res);
        
    } catch (error) {
       console.log(error); 
    }
}

module.exports = generateCalendar;