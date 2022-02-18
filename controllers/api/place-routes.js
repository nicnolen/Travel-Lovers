const router = require('express').Router();
const { Place } = require('../../models')

// get all places
router.get('/', (req, res) => {});

// get a single place
router.get('/:id',(req, res) => {});

// input a place
router.post('/', (req, res) => {});

// update a place
router.put('/:id', (req, res) => {});

// delete a place
router.delete('/:id', (req, res) => {});

module.exports = router;