const express = require('express');
const animalController = require('../controllers/animalController')

const router = express.Router();

router
  .route('/')
  .get(animalController.readAnimals)
  .post(animalController.createAnimal);

router
  .route('/:id')
  .get(animalController.readAnimalById)
  .delete(animalController.deleteAnimal);

module.exports = router;