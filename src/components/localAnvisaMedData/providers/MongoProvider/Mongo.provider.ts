import { MongoClient } from 'mongodb';
import filePath from '../../../../helpers/filePath';

const connectionURL = 'mongodb+srv://anvisa_med_price:Ep9M8bzgGmh2yYFQ@main.kiifb.mongodb.net/AnvisaData';

const findFilteredMongo = (
  param?: string,
  value?: string,
): Promise<IMedication[]> => new Promise(async (resolve, reject) => {
  try {
    const client = await MongoClient.connect(connectionURL);
    const res = client.db('AnvisaData').collection('medAnvisaPrice').find({[param]: value}).toArray()
    resolve(res);
  } catch (error) {
    reject(error);
  }
});

export { findFilteredMongo };
