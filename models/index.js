// Export all models as well as db connection itself
const theDbConnection = require('./_db');
const Hotel = require('./hotel');
const Activity = require('./activity');
const Restaurant = require('./restaurant');
const Place = require('./place');
const Day = require('./day');

Activity.belongsTo(Place);
Hotel.belongsTo(Place);
Place.hasMany(Restaurant);
Place.hasMany(Activity);
Place.hasMany(Hotel);
Restaurant.belongsTo(Place);
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

