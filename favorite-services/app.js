require('express-async-errors')
const express = require('express')
const app = express()

//! injection
const mongoSanitize = require('express-mongo-sanitize');
app.use(mongoSanitize());

//! rate limit
const limit = require('./src/middlewares/lib/rateLimit')
app.use('/api/v1',limit)


//! Cors
const cors = require('cors')
const corsOptions = require('./src/helpers/cors')
app.use(cors(corsOptions))

//! Database connection
db = require('./src/config/db.connection')

//! body-parser and json
const bodyParser = require('body-parser');     
app.use(bodyParser.urlencoded({extended:false}));  
app.use(bodyParser.json());

//! public file
app.use(express.static('public'));

//! routers 
const routers = require('./src/routes/index')
app.use('/api/v1/users/favorites', routers)


//! catch error
const errorHandler = require('./src/middlewares/errorHandler')
app.use(errorHandler)

app.listen(5001, () => {
    console.log('Server Running')
})


