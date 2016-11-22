// Export all models as well as db connection itself
const theDbConnection = require('./_db');
const Hotel = require('./hotel');
const Activity = require('./activity');
const Restaurant = require('./restaurant');
const Place = require('./place');
const Day = require('./day');

//Associations:
//Give Place instances association methods
Place.hasMany(Restaurant);
Place.hasMany(Activity);
Place.hasMany(Hotel);

//Give Activity table placeId
Activity.belongsTo(Place);

//Give Hotel table placeId
Hotel.belongsTo(Place);

//Give Restaurant table placeId
Restaurant.belongsTo(Place);

//Give Day instances association methods
Day.hasOne(Hotel);
Day.hasMany(Restaurant);
Day.hasMany(Activity);

module.exports = {
    db: theDbConnection,
    Hotel: Hotel,
    Place: Place,
    Restaurant: Restaurant,
    Activity: Activity,
    Day: Day
};
