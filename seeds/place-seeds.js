const { Place } = require('../models');

const placeData = [
    {
        city: 'Los Angeles',
        date: '05/05/25'
    },
    {
        city: 'Chicago',
        date: '03/03/23'
    },
    {
        city: 'Paris',
        date: '02/02/25'
    },
    {
        city: 'Berlin',
        date: '10/02/22'
    },
    {
        city: 'Bangkok',
        date: '11/17/22'
    },
    {
        city: 'Vietnam',
        date: '11/17/22'
    },
];

const seedPlaces = () => Place.bulkCreate(placeData);

module.exports = seedPlaces;