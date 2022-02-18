const Place = require('./Place');
const Comment = require('./Comment');

// create associations
Place.hasMany(Comment, {
    foreignKey: 'places_id'
})

module.exports = { Place, Comment };