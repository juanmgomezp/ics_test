const Router = require('express').Router;
const editReservation = require('../controllers/reservation.controller');

const ReservationsRouter = Router();

ReservationsRouter.put('/reservations/:reservationId', editReservation)

module.exports = ReservationsRouter;