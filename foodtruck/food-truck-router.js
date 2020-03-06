const express = require('express')
const router = express.Router();

const Trucks = require('./food-truck-model.js')

// *** TRUCKS ***
// GET
router.get('/:id', (req, res) => {
    const {id} = req.params
   Trucks.getTrucksById(id)
   .then(trucks => {
       res.json(trucks)
   })
   .catch(error => {
       res.status(500).json({
           message: 'Failed to get food truck by specific id'
       })
   })
})


// POST
router.post('/', (req, res) => {
    const truckData = req.body
    Trucks.addTrucks(truckData)
    .then(trucks => {
        res.status(201).json(trucks)
    })
    .catch(error => {
        res.status(500).json({
            message: 'Failed to create food truck'
        })
    })
})

// PUT
router.put('/:id', (req, res) => {
    const {id} = req.params
    const changes = req.body
    Trucks.updateTrucks(id, changes)
    .then(updatedTruck => {
        res.status(200).json({
            updated: updatedTruck
        })
    })
    .catch(error => {
        res.status(500).json({
            message: 'Failed to update food truck information'
        })
    })
})
// DELETE
router.delete('/:id', (req, res) => {
    const {id} = req.params
    Trucks.removeTrucks(id)
    .then(truckDeleted => {
        res.json({
            deleted: truckDeleted
        })
    })
    .catch(error => {
        res.status(500).json({
            message: 'Failed to delete food truck information'
        })
    })
})

// *** MENUS ***
// GET
router.get('/:id/menu', (req, res) => {
    const { id } = req.params;
    Trucks.getMenu(id)
    .then(menu => {
          res.json(menu);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get menu information' });
      });
})

// *** LOCATION ***
// GET
router.get('/:id/location', (req, res) => {
    const { id } = req.params;
    Trucks.getLocation(id)
    .then(location => {
          res.json(location);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get location information' });
      });
})

// *** NEXT LOCATION ***
// GET
router.get('/:id/location/next', (req, res) => {
    const { id } = req.params;
    Trucks.getNext(id)
    .then(next => {
          res.json(next);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get next location information' });
      });
})

module.exports = router;