const request = require('supertest');
const server = require('./server.js');
const jwt = require('jsonwebtoken');
const config = require ('./config/secrets.js')
const db = require('./data/dbConfig.js')


describe('server.js', () => {
    it('should set test environment', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })
    describe('Registering Operator', () => {
        it('should return 201 created', async () => {
            const register = await request(server)
            .post('/api/operator/register')
            .send({
                "username": "tests",
                "password": "pass",
                "trucksOwned": 2
            })
            expect(register.status).toBe(201)
        
})
    })

    describe('Registering Diner', () => {
        it('should return 201 created', async () => {
            const register = await request(server)
            .post('/api/diner/register')
            .send({
                "username": "superfoods",
                "password": "ilovefood",
                "currentLocation": "Phoenix, AZ"
            })
            expect(register.status).toBe(201)
        
})
    })

    describe('Logging in as Operator', () => {
        it('should return 200 OK', async () => {
            const login = await request(server)
            .post('/api/operator/login')
            .send({
                "username": "tests",
	            "password": "pass"
            })
            expect(login.status).toBe(200)
        })
    })
    describe('Logging in as Diner', () => {
        it('should return 200 OK', async () => {
            const login = await request(server)
            .post('/api/diner/login')
            .send({
                "username": "superfoods",
	            "password": "ilovefood"
            })
            expect(login.status).toBe(200)
        })
    })
    describe('Returns list of operators', () => {
        it('should return 200 OK', async () => {
            var token = jwt.sign({
                id: 1,
            }, config.jwtSecret, { expiresIn: 1000 * 60 * 5 });
            request(server)
                .get('/api/operator')
                .set('Authorization', token)
                .expect(200)
        })
    })

    describe('Returns list of diners', () => {
        it('should return 200 OK', async () => {
            var token = jwt.sign({
                id: 1,
            }, config.jwtSecret, { expiresIn: 1000 * 60 * 5 });
            request(server)
                .get('/api/diner')
                .set('Authorization', token)
                .expect(200)
        })
    })
})
