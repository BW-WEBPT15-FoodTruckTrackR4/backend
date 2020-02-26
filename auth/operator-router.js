const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');
const Users = require('./auth-model.js')

router.post('/register', (req, res) => {
    let user = req.body
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash

    Users.addOperator(user)
    .then(saved => {
        res.status(201).json(saved);
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

router.get('/login', (req, res) => {
    let {username, password} = req.body;

    Users.findByOperator({ username })
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            req.session.user = user;
            res.status(200).json({
                message: `Welcome ${user.username}!`
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


module.exports = router;