const Place = require('./Place');
const Comment = require('./Comment');
const User = require('./User');
const Post = require('./Post');

// create associations
Place.hasMany(Comment, {
    foreignKey: 'place_id',
    onDelete: 'CASCADE'
})
Comment.belongsTo(User, {
    foreignKey: 'user_Id',
    onDelete: 'CASCADE'
});


module.exports = { Place,Post, Comment, User };
