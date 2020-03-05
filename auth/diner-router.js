const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const Users = require('./auth-model.js')
const authenticate = require('./auth-middleware.js');
const secrets = require('../config/secrets.js')

router.post('/register', (req, res) => {
    let user = req.body
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash

    Users.addDiner(user)
    .then(saved => {
        res.status(201).json(saved);
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

router.post('/login', (req, res) => {
    let {username, password} = req.body;

    Users.findByDiner({ username })
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = genToken(user)
            res.status(200).json({
                message: `Welcome ${user.username}!`,
                token: token
            })
        } else {
            res.status(401).json({
                message: 'Invalid Credentials'
            })
        }
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

router.get('/', authenticate, (req, res) => {
    Users.findDiners()
    .then(diners => {
        res.json(diners)
    })
})

router.get('/:id', authenticate, (req, res) => {
    const {id} = req.params
    Users.findByDinerId(id)
    .then(diners => {
        res.json(diners)
    })
    .catch(err => {
        res.status(500).json({
            message: 'Failed to get diners by specific id'
        })
    })
})

function genToken(user) {
    const payload = {
        userId: user.id,
        username: user.username
    }
    const options = {
        expiresIn: '1h'
    }
    const token = jwt.sign(payload, secrets.jwtSecret, options)
    return token;
}


module.exports = router;