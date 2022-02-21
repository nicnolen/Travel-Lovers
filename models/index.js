const router = require('express').Router();

const userRoutes = require('./user-routes.js');
// create associations
Place.hasMany(Comment, {
    foreignKey: 'place_id',
    onDelete: 'CASCADE'
})
Comment.belongsTo(User, {
    foreignKey: 'user_Id',
    onDelete: 'CASCADE'
});

router.use('/users', userRoutes);

module.exports = router;