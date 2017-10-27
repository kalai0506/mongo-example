let MongoClient = require ('mongodb').MongoClient;

const URL="mongodb://localhost:27017/mydb";

MongoClient.connect(URL,function(err,db){
  console.log("Connected to the database servers!!");
  insertDocument(db,function(){
    console.log('Database connection closed!');
    db.close();
  });
  findDocuments(db,function(){
    console.log('Database connection closed!');
    db.close();
  });
});

let insertDocument = function (db, callback){
  let collection = db.collection('newdocument');
  collection.insertMany([{a:5,b:6,c:7},{d:8,e:9,f:10}],function(err,result){
    console.log("Inserted the documents into the collection!!");
    console.log(result);
  })
}

let findDocuments = function (db, callback){
  let collection = db.collection('newdocument');
  collection.find({},{_id:0}).toArray(function(err,docs){
    console.log("Fetched the docs!!");
    console.log(docs);
  });
}