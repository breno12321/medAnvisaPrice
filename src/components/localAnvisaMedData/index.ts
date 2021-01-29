import fs from 'fs';
import path from 'path';

const filePath = (dir: string) => path.resolve(__dirname, dir);

// export const getMedByFilter = (
export default (
  value?: string,
  param?: string,
): Promise<IMedication[]> => new Promise((resolve, reject) => {
  try {
    const data = fs.readFileSync(filePath('../../assets/medAnvisaPrice.json'));
    const parsedData = JSON.parse(Buffer.from(data).toString());

    resolve(parsedData.filter((item: IMedication) => item[param] === value));
  } catch (error) {
    reject(error);
  }
});
