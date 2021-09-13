export default function initReservationsController(db) {
  const index = (request, response) => {
    const getDrummerCalls = [];
    db.Reservation.findAll()
      .then((reservations) => {
        reservations.forEach((reservation) => {
          getDrummerCalls.push(reservation.getDrummer());
        });
        Promise.all(getDrummerCalls).then((result) => {
          response.render('reservations/index', { reservations, result });
        });
      })
      .catch((error) => console.log(error));
  };

  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    index,
  };
}
