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
router.get('/:id/foodtruck', (req, res) => {
    const { id } = req.params;
    Trucks.getFavTrucks(id)
    .then(favTrucks => {
          res.json(favTrucks);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get favorite food truck information' });
      });
})

router.get('/:id/foodrating', (req, res) => {
    const { id } = req.params;
    Trucks.getFoodRating(id)
    .then(favFood => {
          res.json(favFood);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get favorite food rating information' });
      });
})

router.get('/:id/rating', (req, res) => {
    const { id } = req.params;
    Trucks.getRating(id)
    .then(ratings => {
          res.json(ratings);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get rating information' });
      });
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

router.post('/foodtruck', (req, res) => {
    const favData = req.body
    Trucks.addFavTruck(favData)
    .then(favtruck => {
        res.status(201).json(favtruck)
    })
    .catch(error => {
        res.status(500).json({
            message: 'Failed to add favorite truck'
        })
    })
})

router.post('/rating', (req, res) => {
    const ratingData = req.body
    Trucks.addRating(ratingData)
    .then(rating => {
        res.status(201).json(rating)
    })
    .catch(error => {
        res.status(500).json({
            message: 'Failed to add truck rating'
        })
    })
})

router.post('/foodrating', (req, res) => {
    const ratingData = req.body
    Trucks.addFoodRating(ratingData)
    .then(rating => {
        res.status(201).json(rating)
    })
    .catch(error => {
        res.status(500).json({
            message: 'Failed to add food rating'
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