const express = require('express');
const router = require('./routes/route');

const path = require('path');

const app = express();

app.use(router);

const PORT = 3000;
const BASE_URL = `localhost:${PORT}`

app.listen(PORT);

console.log(`Servidor iniciado ${BASE_URL}`);