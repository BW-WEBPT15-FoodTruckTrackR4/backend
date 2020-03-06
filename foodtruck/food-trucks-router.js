const express = require('express')
const router = express.Router();

const Trucks = require('./food-truck-model.js')

router.get('/', (req, res) => {
   Trucks.getTrucks()
   .then(trucks => {
       res.json(trucks)
   })
   .catch(error => {
       res.status(500).json({ 
           message: 'Failed to get food trucks'
       })
   })
})
router.get('/search', (req, res) => {
    Trucks.searchByQuery()
    .then(search => {
        res.json(search)
    })
    .catch(error => {
        res.status(500).json({ 
            message: 'Failed to get any searches'
        })
    })
})

router.get('/menus', (req, res) => {
    Trucks.getMenus()
    .then(menus => {
        res.json(menus)
    })
    .catch(error => {
        res.status(500).json({ 
            message: 'Failed to get any menus'
        })
    })
})

router.get('/favtrucks', (req, res) => {
    Trucks.getFav()
    .then(fav => {
        res.json(fav)
    })
    .catch(error => {
        res.status(500).json({ 
            message: 'Failed to get any favorite trucks'
        })
    })
})

router.get('/foodratings', (req, res) => {
    Trucks.getFood()
    .then(food => {
        res.json(food)
    })
    .catch(error => {
        res.status(500).json({ 
            message: 'Failed to get any food ratings'
        })
    })
})

router.get('/ratings', (req, res) => {
    Trucks.getRatings()
    .then(rating => {
        res.json(rating)
    })
    .catch(error => {
        res.status(500).json({ 
            message: 'Failed to get any ratings'
        })
    })
})


module.exports = router;