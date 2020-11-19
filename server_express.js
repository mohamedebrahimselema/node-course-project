const express = require('express');
const dotenv = require('dotenv');

// load env vars
dotenv.config({ path: './config/config.env'});
const app = express();


app.get('/api/v1/bootcamp/', (req, res) => {
    res.status(200).json({sucess: true , message : "show all bootcamps"});
});


app.post('/api/v1/bootcamp/', (req, res) => {
    res.status(200).json({sucess: true , message : "create new bootcamps"});
});
app.get('/api/v1/bootcamp/:id', (req, res) => {
    res.status(200).json({sucess: true , message : `display bootcamp get  ${req.params.id}`});
});

app.put('/api/v1/bootcamp/:id', (req, res) => {
    res.status(200).json({sucess: true , message : `update bootcamp put  ${req.params.id}`});
});


app.delete('/api/v1/bootcamp/:id', (req, res) => {
    res.status(200).json({sucess: true , message : `delete  bootcamps  ${req.params.id}`});
});

const PORT = process.env.PORT || 5000 ;
app.listen(PORT, () => {
    console.log(`App listening on process.env.PORT ${process.env.PORT} or  port ${PORT}!`);
});
