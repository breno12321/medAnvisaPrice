import { ENOENT } from 'constants';
import fs from 'fs';
import path from 'path';

const filePath = (dir: string) => path.resolve(__dirname, dir);

// export const getMedByFilter = (
export default (
  value?: string,
  param?: string,
): Promise<any> => new Promise((resolve, reject) => {
  try {
    const data = fs.readFileSync(filePath('../../assets/medAnvisaPrice.json'));
    const parsedData = JSON.parse(Buffer.from(data).toString());

    resolve(parsedData.filter((item) => item[param] === value));
  } catch (error) {
    reject(error);
  }
});

// (async () => {
//   const dados = await getMedByFilter("7896382708459", "EAN 1");
//   console.log(dados);
// }())
