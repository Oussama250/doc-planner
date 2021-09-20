const express = require("express");
const router = express.Router();
const Country = require('../models/countries_model');
const Country2 = require('../models/countries2_model');
const Country3 = require('../models/countries3_model');

router.get('/find_countries', function (req, res, next) {
    Country.find({})
        .then(function (users) {
            res.send(users);
        })
        .catch(next);
});

router.get('/find_countries2', function (req, res, next) {
    Country2.find({})
        .then(function (users) {
            res.send(users);
        })
        .catch(next);
});

router.get('/find_countries3', function (req, res, next) {
    Country3.find({})
        .then(function (users) {
            res.send(users);
        })
        .catch(next);
});

router.post('/add_country', function (req, res, next) {
    Country.create(req.body)
        .then(function (user) {
            res.send(user);
        })
        .catch(next);


    // OR
    // const username = req.body.username;

    // const newUser = new User({username});

    // newUser.save()
    // .then(() => res.json('User added!'))
    // .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add_country2', function (req, res, next) {
    Country2.create(req.body)
        .then(function (user) {
            res.send(user);
        })
        .catch(next);
});

router.post('/add_country3', function (req, res, next) {
    Country3.create(req.body)
        .then(function (user) {
            res.send(user);
        })
        .catch(next);
});

module.exports = router;
 // "type": "module", ---> put this in package.json file to add ES6 to the project (import/export).