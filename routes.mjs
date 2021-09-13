import db from './models/index.mjs';

// import the controller
import initDrummersController from './controllers/drummers.mjs';
import initReservationsController from './controllers/reservations.mjs';

export default function bindRoutes(app) {
  // pass in the db for all items callbacks
  const drummersController = initDrummersController(db);
  const reservationsController = initReservationsController(db);

  app.get('/drummers', drummersController.index);
  app.get('/reservations', reservationsController.index);
}
