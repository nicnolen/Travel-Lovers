/* ROUTES FOR THE USER MODEL (/api/users) */
// Import models and dependencies
const router = require('express').Router();
const { User } = require('../../models');

// GET /api/users (find all users)
router.get('/', (req, res) => {});

// GET /api/users/1 (find users by id)
router.get('/:id', (req, res) => {});

// POST /api/users (create a new user)
router.post('/', (req, res) => {});

// PUT /api/users/1 (update user by id)
router.put('/:id', (req, res) => {});

// DELETE /api/users/1 (delete user by id)
router.delete('/:id', (req, res) => {});

// Export module
module.exports = router;
