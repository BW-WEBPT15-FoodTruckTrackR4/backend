const db = require('../data/dbConfig.js')

module.exports = {
    addOperator,
    addDiner,
    updateDiner,
    updateOperator,
    findOperators,
    findByOperator,
    findDiners,
    findByDiner
}

async function addOperator(user) {
    return db('operators').insert(user);
}

async function addDiner(user) {
    return db('diners').insert(user);
        
    }

function findDiners() {
    return db('diners').select('id', 'username', 'password', 'currentLocation', 'favoriteTrucks')
}

function findOperators() {
    return db('operators').select('id', 'username', 'password', 'trucksOwned')
}

function findByDiner(filter) {
    return db('diners').where(filter)
}

function findByOperator(filter) {
    return db('operators').where(filter)
}

function updateDiner(id, dinerData) {
    return db('diners').where({id}).update(dinerData)
}

function updateOperator(id, operatorData) {
    return db('operators').where({id}).update(operatorData)
}

