const express = require('express');
const router = express.Router();
const models = require('../models');
const Hotel = models.Hotel;
const Place = models.Place;
const Activity = models.Activity;
const Restaurant = models.Restaurant;

module.exports = router;

router.get('/', function (req, res, next) {
  const findingHotels = Hotel.findAll({
    order: 'name ASC'
  });
  const findingActivities = Activity.findAll({
    order: 'name ASC'
  });
  const findingRestaurants = Restaurant.findAll({
    order: 'name ASC'
  });

  const findingSelectedHotel = Hotel.findOne({
    where: {
      dayId: 1
    }
  });

  const findingSelectedRestaurants = Restaurant.findAll({
    where:{
      dayId: 1
    }
  });

  const findingSelectedActivities = Activity.findAll({
    where:{
      dayId: 1
    }
  });
  const findingAllTripOptions =
  Promise.all([findingActivities,
               findingHotels,
               findingRestaurants,
               findingSelectedHotel,
               findingSelectedRestaurants,
               findingSelectedActivities])
          .then(function (data) {
            res.render('index', {
              templateHotels: data[1],
              templateRestaurants: data[2],
              templateActivities: data[0],
              selectedHotel: data[3],
              selectedRestaurants: data[4],
              selectedActivities: data[5]
            })
          })
          .catch(next);

  return findingAllTripOptions;
});
