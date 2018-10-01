var express = require('express');
var db = require('../models');

var router = express.Router();

// render all current data on page load
router.get('/', function (req, res) {
  db.Burger.findAll({}).then((dbBurger) => res.json(dbBurger));
});

router.post('/api/burgers', function (req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }).then((dbBurger) => res.json(dbBurger));
});

router.put('/api/burgers/:id', function (req, res) {
  db.Burger.update({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }, {
      where: {
        id: req.body.id
      }
    }).then((dbBurger) => res.json(dbBurger));
});

module.exports = router;