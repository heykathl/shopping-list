const express = require('express');
const router = express.Router();

// Item model - to query
const Item = require('../../models/Item')

// @route GET api/items
// @desc Get all items
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});



module.exports = router;