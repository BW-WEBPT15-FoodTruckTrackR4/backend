// imports
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');

const authenticate = require('./auth/auth-middleware.js');
const operatorRouter = require('./auth/operator-router.js');
const dinerRouter = require('./auth/diner-router.js');
const foodTruckRouter = require('./foodtruck/food-truck-router.js');
const foodTrucksRouter = require('./foodtruck/food-trucks-router.js')

// sessions and cookies
const sessionConfig = {
    name: 'foodie',
    secret: 'Food trucks for life bruh',
    cookie: {
        maxAge: 1000 * 120,
        secure: true,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: false
}

// server
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig));

server.use('/api/operator', operatorRouter);
server.use('/api/diner', dinerRouter);
server.use('/api/truck', authenticate, foodTruckRouter);
server.use('/api/trucks', authenticate ,foodTrucksRouter);

server.get('/', (req, res) => {
res.status(200).json({ message: 'Welcome to the food truck API!'})
})

module.exports = server;

