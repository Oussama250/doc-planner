const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

require('dotenv').config();

mongoose.connect(process.env.MONGOD_URL,{useNewUrlParser : true, useUnifiedTopology : true});
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.once('open', _ => {
    console.log('Database connected', process.env.MONGOD_URL);
});

db.on('error', err => {
    console.error('connection error:', process.env.MONGOD_URL);
});
app.use(express.json());
app.use(cors());
app.use('/countries', require('./routes/countries'));
app.use(function(err, req, res, next) {
    res.status(422).send({error: err.message})
});

//use this to create the document countries in the database.
// const User = require('./models/countries_model');

// const user1 = new User({country:"Brazil"});
// user1.save((error) => {
//     if(error) {
//         console.log(`error has occured: ${error}`);
//     }
//     else
//         console.log("Document has succesfuly saved.");
// });


//use this to create the document countries2 in the database.
// const User = require('./models/countries2_model');

// const user1 = new User({country:"Brazil"});
// user1.save((error) => {
//     if(error) {
//         console.log(`error has occured: ${error}`);
//     }
//     else
//         console.log("Document has succesfuly saved2.");
// });


//use this to create the document countries3 in the database.
// const User = require('./models/countries3_model');

// const user1 = new User({country:"Brazil"});
// user1.save((error) => {
//     if(error) {
//         console.log(`error has occured: ${error}`);
//     }
//     else
//         console.log("Document has succesfuly saved3.");
// });

app.listen(5002, function() {//process.env.port || process.env.port2
    console.log('now listening for requests.');
});