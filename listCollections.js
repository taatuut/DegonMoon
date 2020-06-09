/**
 * 
 * @summary Uses MongooseJS to Connect to MongoDB and lists all collections within
 * @author taatuut
 *
 */

require('dotenv').config();

let mongoose = require('mongoose'),
  ATLAS_CONNECTION = 'mongodb+srv://'+process.env.ATLAS_USERNAME+':'+process.env.ATLAS_PASSWORD+'@'+process.env.ATLAS_CLUSTER+'/'+process.env.ATLAS_DATABASE,
  CONNECTION_OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useUnifiedTopology: true };

mongoose.connect(ATLAS_CONNECTION, CONNECTIONS_OPTIONS)

mongoose.connection.on('open', function(){
  mongoose.connection.db.listCollections().toArray(function(error, items) {
    if (error) {
      throw new Error(error);
    } else {
     console.log(items);
    }
  });
});

mongoose.connection.on('error', function(error){
  throw new Error(error);
});

/* EOF */