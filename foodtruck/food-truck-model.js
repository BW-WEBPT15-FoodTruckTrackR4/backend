const db = require('../data/dbConfig.js')
module.exports = {
    getTrucks
}

function getTrucks() {
    return db('trucks');
}