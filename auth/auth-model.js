const db = require('../data/dbConfig.js')

module.exports = {
    addOperator,
    addDiner,
    findOperators,
    findByOperator,
    findByOperatorId,
    findDiners,
    findByDiner,
    findByDinerId
}

async function addOperator(user) {
const [id] = await db('operators').insert(user);
    return findByOperatorId(id)
}

async function addDiner(user) {
    const [id] = await db('diners').insert(user);
        return findByDinerId(id)
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

function findByDinerId(id) {
    return db('diners').where({ id }).first()
}

function findByOperatorId(id) {
    return db('operators').where({ id }).first()
}


