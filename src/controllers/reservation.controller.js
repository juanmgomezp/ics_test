const Reservations = require('../models/reservations');
const Rooms = require('../models/rooms');

const getReservations = async (req, res) => {
    try {
        const reservations = await Reservations.find();
        res.status(201).json({msg: 'reservations obtained', reservations: reservations});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "we have an error"});
    }
}

const editReservation = async (req, res) => {
    try {
        const reservationId = req.params.reservationId;
        const { start, end, guest, sequence } = req.body
        const reservationEdit = await Reservations.findByIdAndUpdate(reservationId, 
            {$set: {guest: guest, start: start, end: end, sequence: sequence}}, {new: true});
        
        res.status(201).json({msg: 'reservation updated', update: reservationEdit});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "we have an error"});
    }
}

const addReservation = async (req, res) => {
    try {
        const { start, end, guest, sequence, room } = req.body
        
        const Room = await Rooms.findById(room);

        const newReservation = new Reservations({
            guest: guest,
            start: start,
            end: end,
            sequence: sequence,
            room: Room.id
        });

        const savedReservation = await newReservation.save();
        res.status(200).json({msg: 'reservation added', added: savedReservation});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "we have an error"});
    }
}

const deleteReservation = async (req, res) => {
    try {
        const reservationId = req.params.reservationId;
        const reservationDeleted = await Reservations.findByIdAndDelete(reservationId);
        
        res.status(201).json({msg: 'reservation deleted', deleted: reservationDeleted});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "we have an error"});
    }
}

module.exports = { editReservation, addReservation, deleteReservation, getReservations };