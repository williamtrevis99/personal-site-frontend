const express = require('express')
const path = require('path');
const serveStatic = require("serve-static");
const app = express()
const port = 8080


app.use('/', express.static('./dist'))

app.listen(port, () => {
})