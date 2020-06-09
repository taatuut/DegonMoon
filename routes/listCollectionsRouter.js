/**
 * 
 * @summary Uses MongooseJS to Connect to MongoDB and lists all collections within
 * @author taatuut
 *
 */

require('dotenv').config();

var express = require('express');
var router = express.Router();
const axios = require('axios');
 
/* GET listCollections from backend. */
router.get('/', (req, res, next) => {
    let mongoose = require('mongoose'),
    ATLAS_CONNECTION = 'mongodb+srv://'+process.env.ATLAS_USERNAME+':'+process.env.ATLAS_PASSWORD+'@'+process.env.ATLAS_CLUSTER+'/'+process.env.ATLAS_DATABASE,
    CONNECTION_OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useUnifiedTopology: true };
    mongoose.connect(ATLAS_CONNECTION, CONNECTION_OPTIONS)
    mongoose.connection.on('open', function(){
    mongoose.connection.db.listCollections().toArray(function(error, items) {
        if (error) {
            throw new Error(error);
            console.log('Error', error.message);
            console.log(error.config);
        }
        else {
            console.log(items);
            res.send(items);
            mongoose.disconnect();
        }
    });
    });
    mongoose.connection.on('error', function(error){
        throw new Error(error);
        console.log('Error', error.message);
        console.log(error.config);
    }); 
})

module.exports = router;
