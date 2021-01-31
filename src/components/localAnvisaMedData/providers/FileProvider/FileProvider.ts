import { readFileSync } from "fs";
import filePath from "../../../../helpers/filePath";

const findFilteredLocal = (
  param?: string,
  value?: string,
): Promise<IMedication[]> => new Promise((resolve, reject) => {
  try {
    const data = readFileSync(filePath('../../assets/medAnvisaPrice.json'));
    const parsedData = JSON.parse(Buffer.from(data).toString());
    resolve(parsedData.filter((item: IMedication) => item[param] === value));
  } catch (error) {
    reject(error);
  }
});

export { findFilteredLocal };
