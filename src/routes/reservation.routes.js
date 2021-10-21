const Router = require('express').Router;
const resCtrl = require('../controllers/reservation.controller');

const ReservationsRouter = Router();

ReservationsRouter.post('/reservations', resCtrl.addReservation);
ReservationsRouter.get('/reservations', resCtrl.getReservations);
ReservationsRouter.put('/reservations/:reservationId', resCtrl.editReservation);
ReservationsRouter.delete('/reservations/:reservationId', resCtrl.deleteReservation);

module.exports = ReservationsRouter;