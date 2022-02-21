const router = require('express').Router();
const { Place, Comment, User } = require('../../models')

// get all places
router.get('/', (req, res) => {
    Place.findAll()
    .then(places => {
        res.json(places)
        res.render('/bucket-list', places);

    })
    .catch(err => {
        console.error(err);
        res.status(500).json(err);
    });
});

// get a single place
router.get('/:id',(req, res) => {
    Place.findOne({
        where: {
            id: req.params.id
        },
    })
    .then(dbPlaceData => {
        if(!dbPlaceData) {
            res.status(404).json({ message: 'No place found with this id' });
            return;
        }
        res.json(dbPlaceData);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json(err);
    });
});

// input a place
router.post('/', (req, res) => {
    Place.create({
        city: req.body.city,
        date: req.body.date
    })
    .then(dbPlaceData => res.json(dbPlaceData))
    .catch(err => {
        console.error(err)
        res.status(500).json(err);
    });
});

// update a place
router.put('/:id', (req, res) => {
    Place.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbPlaceData => {
        if(!dbPlaceData[0]) {
            res.status(404).json({ message: 'No place found with this id' });
            return;
        }
        res.json(dbPlaceData);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json(err);
    });
});

// delete a place
router.delete('/:id', (req, res) => {
    Place.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPlaceData => {
        if(!dbPlaceData) {
            res.status(404).json({ message: 'No user found with this id' });
        }
        res.json(dbPlaceData);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json(err);
    });
});

module.exports = router;