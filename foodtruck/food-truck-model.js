const db = require('../data/dbConfig.js')
module.exports = {
    getTrucks,
    getTrucksById,
    getMenu,
    getMenus,
    getFav,
    getFood,
    getRatings,
    getLocation,
    getNext,
    getFavTrucks,
    getFoodRating,
    getRating,
    searchByQuery,
    addTrucks,
    addFavTruck,
    addRating,
    addFoodRating,
    updateTrucks,
    removeTrucks
}

function getTrucks() {
    return db('trucks');
}

function getFood() {
    return db('customerFoodRating');
}

function getFav() {
    return db('favfoodtrucks');
}

function getRatings() {
    return db('customerRating');
}

function getTrucksById(id) {
    return db('trucks').where({id}).first();
}

function getMenu(id) {
    return db('trucks as t')
    .join('menus as m', 'm.id', 't.menu_id')
    .select('t.id', 't.imageOfTruck', 'm.itemName', 'm.itemDescription', 'm.itemPhotos', 'm.customerFoodRating_id', 'm.customerRatingAvg')
    .where({ menu_id: id})
   
}

function getMenus() {
    return db('menus');
}

function getLocation(id) {
    return db('trucks as t')
    .join('location as l', 'l.id', 't.location_id')
    .select('l.id', 'l.location', 'l.departureTime', 'l.nextLocation')
    .where({ location_id: id})
}

function getNext(id) {
    return db('location as l')
    .join('nextLocation as nl', 'nl.id', 'l.next_id')
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

function addFavTruck(favData) {
return db('favfoodtrucks').insert(favData);
}

function addRating(ratingData) {
    return db('customerRating').insert(ratingData);
    }

function addFoodRating(foodData) {
        return db('customerFoodRating').insert(foodData);
        }

function getFavTrucks(id) {
            return db('diners as d')
            .join('favfoodtrucks as ft', 'ft.id', 'd.favoriteTruck_id')
            .select('ft.id', 'ft.truckName')
            .where({ favoriteTruck_id: id})
        }

function getFoodRating(id) {
            return db('menus as ms')
            .join('customerFoodRating as cf', 'cf.id', 'ms.foodRating_id')
            .select('cf.id', 'cf.foodRating')
            .where({ foodRating_id: id})
        }

function getRating(id) {
            return db('trucks as t')
            .join('customerRating as cr', 'cr.id', 't.rating_id')
            .select('cr.id', 'cr.rating')
            .where({ rating_id: id})
        }
        
        
        
