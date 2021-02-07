import { findFilteredLocal } from './providers/FileProvider/FileProvider';
import { findFilteredMongo } from './providers/MongoProvider/Mongo.provider';

const findFiltered = (
  param?: string,
  value?: string,
): Promise<IMedication[]> => new Promise(async (resolve, reject) => {
  try {
    const resMongo = await findFilteredMongo(param,value);
    if(resMongo.length === 0){
      const resLocal = await findFilteredLocal(param, value);
      resolve(resLocal);
    }
    resolve(resMongo);
  } catch (error) {
    reject(error);
  }
});


export { findFiltered };
