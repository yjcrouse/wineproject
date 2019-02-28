const express = require('express');
const router = express.Router();
const Wine = require('../db').import('../models/wine');
const validateSession = require('../middleware/validate-session');

router.get('', (req, res) => {
  Wine.findAll()
    .then(wine => res.status(200).json(wine))
    .catch(err => res.status(500).json(err))
});

router.get('/:name', (req, res) => {
  Wine.findOne({ where: { typeofWine: req.params.name }})
    .then(wine => res.status(200).json(wine))
    .catch(err => res.status(500).json({ error: err}))
})

router.put('/:id', (req, res) => {
  if (!req.errors) {
    Wine.update(req.body, { where: { id: req.params.id }})
      .then(wine => res.status(200).json(wine))
      .catch(err => res.json(req.errors))
  } else {
    res.status(500).json(req.errors)
  }
})

router.post('/', validateSession, (req, res) => {
  if (!req.errors) {
    const wineFromRequest = {
      nameOfWine: req.body.nameOfWine,
      typeOfWine: req.body.typeOfWine,
      year: req.body.year,
      region: req.body.region,
      description: req.body.description,
      foodPairings: req.body.foodPairings
    }

    wine.create(wineFromRequest)
      .then(wine => res.status(200).json(wine))
      .catch(err => res.json(req.errors))
  } else {
    res.status(500).json(req.errors)
  }
})

router.delete('/:id', (req, res) => {
  if (!req.errors) {
    Wine.destroy({ where: { id: req.params.id }})
      .then(wine => res.status(200).json(wine))
      .catch(err => res.json(req.errors))
  } else {
    res.status(500).json(req.errors)
  }
})

module.exports = router;