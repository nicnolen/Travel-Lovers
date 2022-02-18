/* ROUTES FOR THE USER MODEL (/api/users) */
// Import models and dependencies
const router = require('express').Router();
const { User } = require('../../models');

// GET /api/users (find all users)
router.get('/', (req, res) => {
  // access our User model and run .findAll() method
  User.findAll({
    attributes: { exclude: ['password'] }, // exclude the password column
  })
    .then((dbUserData) => res.json(dbUserData)) // collect all users from the user table in the database and send it back as JSON
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// GET /api/users/1 (find users by id)
router.get('/:id', (req, res) => {
  User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id,
    }, // find a user where the id value equals req.params.id value
  })
    .then((dbUserData) => {
      // if there is a non existant id, send the client a 404 error indicating that they asked for the wrong piece of data
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      } // otherwise collect all users from the user table in the database and send it back as JSON
      res.json(dbUserData);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// POST /api/users (create a new user)
router.post('/', (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  User.create({
    // pass in key value pairs where keys are defined in User model and values are what you get from req.body
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// POST /api/users/login (verify the users identity with a login route)
router.post('/login', (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  User.findOne({
    // find a user with a matching email in req.body.email
    where: {
      email: req.body.email,
    },
  }).then((dbUserData) => {
    // if a valid email isnt found then return a status code 400 indicating a bad request
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    // otherwise, match the user password with the hashed password in the database
    res.json({ user: dbUserData });

    // verify user
    const validPassword = dbUserData.checkPassword(req.body.password);
    // check if the password is valid or not
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password' });
      return;
    }

    res.json({ user: dbUserData, message: 'Login successful' });
  });
});

// PUT /api/users/1 (update user by id)
router.put('/:id', (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
  User.update(req.body, {
    individualHooks: true, // must add this statement for the hooks in beforeUpdate to work
    where: {
      id: req.params.id,
    }, // req.body provides new data we want to use, req.params.id indicates where we want the new data to be used
  })
    .then((dbUserData) => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// DELETE /api/users/1 (delete user by id)
router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// Export module
module.exports = router;
