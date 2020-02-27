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

module.exports = router;