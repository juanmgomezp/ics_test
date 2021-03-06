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
                    sequence: item.sequence,
                    lastModified: item.updatedAt,
                    id: item.id,
                    summary: item.guest,
                    description: `Reservation for ${item.guest}`,                
                    url: 'https://www.otl.io'                    
                }
                events.push(event);
            });
        }

        const url = `http://3.21.228.148/ical/${roomId}`; 

        const cal = ical({
            prodId: `//${roomId}//otl.io//EN`, 
            method: 'PUBLISH',
            name: `${roomFounded.name}`,
            timezone: 'America/Mexico_City',
            scale: 'GREGORIAN',
            source: url,
            url: url,
            ttl: 60,
            events: events
        });

        cal.serve(res);        
    } catch (error) {
       console.log(error); 
    }
}

module.exports = generateCalendar;