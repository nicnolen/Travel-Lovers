const Place = require('./Place');
const Comment = require('./Comment');
const User = require('./User');

// create associations
Place.hasMany(Comment, {
    foreignKey: 'place_id'
})

module.exports = { Place, Comment, User };
