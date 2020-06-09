/**
 * 
 * @summary Uses MongooseJS to Connect to MongoDB and write connection status to console
 * @author taatuut
 *
 */

 require('dotenv').config();

let mongoose = require('mongoose'),
    ATLAS_CONNECTION = 'mongodb+srv://'+process.env.ATLAS_USERNAME+':'+process.env.ATLAS_PASSWORD+'@'+process.env.ATLAS_CLUSTER+'/'+process.env.ATLAS_DATABASE,
    CONNECTION_OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useUnifiedTopology: true };

mongoose.connect(ATLAS_CONNECTION, CONNECTION_OPTIONS, () => { console.log("[+] Succesfully connected to database."); });

/* EOF */