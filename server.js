const express = require('express')
const path = require('path');
const app = express()
const port = 8080

// this is an example of middleware - something that intercepts the request
// and can perform checks / computation on the request
const requireJSON = () => {
    return (req, res, next) => {
        if (req.headers['content-type'] !== 'application/json') {
            res.status(400).send('Server requires application/json')
        } else {
            next()
        }
    }
}

app.use('/', express.static('./dist'))

app.listen(port, () => {
})