const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect("mongodb+srv://stori:nodekurs19@cluster0-vy6oe.mongodb.net/test?retryWrites=true", { useNewUrlParser: true })
    .then(client => {
      console.log("Connected!");
      callback(client)
    })
    .catch(err => console.log(err))
};

module.exports = mongoConnect;