const express = require('express');
const dotenv = require('dotenv');

// load env vars
dotenv.config({ path: './config/config.env'});
const app = express();
//route files 
const bootcamps = require('./routes/bootcamps') 

//mount routes
app.use('/api/v1/bootcamp', bootcamps );

const PORT = process.env.PORT || 5000 ;
app.listen(PORT, () => {
    console.log(`App listening on process.env.PORT ${process.env.PORT} or  port ${PORT}!`);
});
