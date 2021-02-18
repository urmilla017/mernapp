const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'portfolio';

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('unable to connect to database');
    }

    console.log('connected to database');

    const db = client.db(databaseName);

    // insert data
    // db.collection('userList').insertOne({
    //     name: "John Smith",
    //     email: "john@smith.com"
    // });
});