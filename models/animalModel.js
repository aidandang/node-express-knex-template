const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
  add,
  remove
}

function find() {
  return db('animals');
}

function findById(id) {
  return db('animals').where({ id }).first();
}

function add(animal) {
  return db('animals').insert(animal);
}

function remove(id) {
  return db('animals').where({ id }).del();
}