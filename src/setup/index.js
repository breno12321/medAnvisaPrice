import { MongoClient } from 'mongodb';

const connectionURL = 'mongodb+srv://anvisa_med_price:Ep9M8bzgGmh2yYFQ@main.kiifb.mongodb.net/AnvisaData';

MongoClient.connect(connectionURL, async (err, client) => {
  if (err) throw err;
  console.log('Connected Successfully!!');

  const db = client.db('AnvisaData');
  const collection = db.collection('medAnvisaPrice');
  const res = await collection.findOne({});
  console.log(await res);
  client.close();
});
