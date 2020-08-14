const Animal = require('../models/animalModel');
const catchAsync = require('../utils/catchAsync');

exports.readAnimals = catchAsync(async (req, res, next) => {
  const animals = await Animal.find();

  res.status(200).json({
    status: 'success',
    animals
  })
})

exports.createAnimal = catchAsync(async (req, res, next) => {
  const newAnimal = await Animal.add(req.body);

  res.status(201).json({
    status: 'success',
    message: 'The animal is created.'
  })
})

exports.readAnimalById = catchAsync(async (req, res, next) => {
  const animal = await Animal.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    animal
  })
})

exports.deleteAnimal = catchAsync(async (req, res, next) => {
  const result = await Animal.remove(req.params.id);
  
  res.status(204).json({
    status: 'success',
    message: 'The animal has been removed.'
  })
})