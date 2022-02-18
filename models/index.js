const Place = require('./Place');
const Comment = require('./Comment');

// create associations
Place.hasMany(Comment, {
    foreignKey: 'place_id'
})

module.exports = { Place, Comment };