import MongoRepository from './db.repository';

const findFilteredMongo = (
  param?: string,
  value?: string,
): Promise<IMedication[]> => new Promise(async (resolve, reject) => {
  try {
    const mongoRepository = await MongoRepository();
    const res = mongoRepository.find({ [param]: value }).toArray();
    resolve(res);
  } catch (error) {
    reject(error);
  }
});

export { findFilteredMongo };

