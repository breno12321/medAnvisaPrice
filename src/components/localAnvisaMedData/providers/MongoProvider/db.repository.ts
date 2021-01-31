import { Collection, MongoClient, MongoNetworkError } from "mongodb";

const connectionURL = 'mongodb+srv://anvisa_med_price:Ep9M8bzgGmh2yYFQ@main.kiifb.mongodb.net/AnvisaData';

const MongoRepository = async(): Promise<Collection> => {
  try {
    const client = await MongoClient.connect(connectionURL);
    return Promise.resolve(client.db('AnvisaData').collection('medAnvisaPrice'))
    } catch (error) {
      if(error instanceof MongoNetworkError){
        return Promise.reject(error.name)
      }
      console.error(error.name);
  }
}

export default MongoRepository;
