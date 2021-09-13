export default function initDrummersController(db) {
  const index = (request, response) => {
    db.Drummer.findAll()
      .then((drummers) => {
        response.render('drummers/index', { drummers });
      })
      .catch((error) => console.log(error));
  };

  const getOneDrummer = (req, res) => {
    db.Drummer.findOne({
      where: {
        id: req.params,
      },
    });
  };

  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    index,
    getOneDrummer,
  };
}
