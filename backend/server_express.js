const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middelware/logger');
const morgan = require('morgan');
const color = require('colors');
const connectDB = require('./config/db');

// load env vars
dotenv.config({ path: './config/config.env'});
const app = express();


// Body parser
app.use(express.json());


//connect database
connectDB();


// middle ware 
//app.use(logger);
app.use(morgan('dev')); 

//route files 
const bootcamps = require('./routes/bootcamps') 

//mount routes
app.use('/api/v1/bootcamp', bootcamps );


const PORT = process.env.PORT || 5000 ;
app.listen(PORT, () => {
    console.log(`App listening on process.env.PORT ${process.env.PORT} or  port ${PORT}!`);
});
