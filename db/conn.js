const mongoose = require('mongoose');

const DB =
  'mongodb://ekofir:Firlianto11@ac-c9jdnnx-shard-00-00.v7w9d8v.mongodb.net:27017,ac-c9jdnnx-shard-00-01.v7w9d8v.mongodb.net:27017,ac-c9jdnnx-shard-00-02.v7w9d8v.mongodb.net:27017/mernstack?ssl=true&replicaSet=atlas-inntl1-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connection start'))
  .catch((error) => console.log(error.message));
