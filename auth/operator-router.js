const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');
const Users = require('./auth-model.js')
const authenticate = require('./auth-middleware.js');
const jwt = require('jsonwebtoken')
const secrets = require('../config/secrets.js')

router.post('/register', (req, res) => {
    let user = req.body
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash

    Users.addOperator(user)
    .then(saved => {
        res.status(201).json(saved);
    })
    .catch(error => {
        res.status(500).json( {message: 'could not register user info '})
    })
})

router.post('/login', (req, res) => {
    // const {id} = req.params
    let {username, password} = req.body;

    Users.findByOperator({ username })
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = genToken(user)
            res.status(200).json({
                id: user.id,
                message: `Welcome ${user.username}!`,
                token: token,
                user: user.username
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
    Users.findOperators()
    .then(operators => {
        res.json(operators)
    })
})

router.get('/:id', authenticate, (req, res) => {
    const {id} = req.params
    Users.findByOperatorId(id)
    .then(operators => {
        res.json(operators)
    })
    .catch(err => {
        res.status(500).json({
            message: 'Failed to get operators by specific id'
        })
    })
})

router.put('/:id', authenticate, (req, res) => {
    const {id} = req.params
    const user = req.body

    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash

    Users.updateOperator(id, user)
    .then(updatedInfo => {
        res.status(200).json({
            updated: updatedInfo
        })
    })
    .catch(error => {
        res.status(500).json({
            message: 'Failed to update operator information'
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