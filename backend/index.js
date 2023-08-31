const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/route');
const path = require('path');

require('dotenv').config();

const mongoString = "mongodb+srv://mongoDB:vNM7nLwaosvJFbZF@clusterdb.5tyxvol.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();
app.use(express.json());

app.use('/api', router);

const PORT = 3000;
const BASE_URL = `localhost:${PORT}`

app.listen(PORT);

console.log(`Servidor iniciado ${BASE_URL}`);