const Place = require('./Place');
const Comment = require('./Comment');
const User = require('./User');

// create associations
Place.hasMany(Comment, {
    foreignKey: 'place_id',
    onDelete: 'CASCADE'
})
Comment.belongsTo(User, {
    foreignKey: 'user_Id',
    onDelete: 'CASCADE'
});

// router.use('/users', userRoutes);

module.exports = { Place, Comment, User };