const db = require('../data/dbConfig.js')
module.exports = {
    getTrucks,
    getTrucksById,
    getMenu,
    getLocation,
    getNext,
    searchByQuery,
    addTrucks,
    updateTrucks,
    removeTrucks
}

function getTrucks() {
    return db('trucks');
}

function getTrucksById(id) {
    return db('trucks').where({id}).first();
}

function getMenu(id) {
    return db('menus as m')
    .join('trucks as t', 't.id', 'm.menu_id')
    .select('m.id', 't.imageOfTruck', 'm.itemName', 'm.itemDescription', 'm.itemPhotos', 'm.customerRatings', 'm.customerRatingAvg')
    .where({ menu_id: id})
   
}

function getLocation(id) {
    return db('location as l')
    .join('trucks as t', 't.id', 'l.location_id')
    .select('l.id', 'l.location', 'l.departureTime', 'l.nextLocation')
    .where({ location_id: id})
}

function getNext(id) {
    return db('nextLocation as nl')
    .join('location as l', 'l.id', 'nl.next_id')
    .select('nl.id', 'nl.location', 'nl.arrivalTime', 'nl.departureTime')
    .where({ next_id: id})
}

function addTrucks(truckData) {
    return db('trucks').insert(truckData);
}

function updateTrucks(id, truckData) {
    return db('trucks').where({id}).update(truckData)
}

function removeTrucks(id) {
    return db('trucks').where('id', id).del()
}

function searchByQuery() {
    return db('search');
}