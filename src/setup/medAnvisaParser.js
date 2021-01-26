import csv from 'csvtojson';
import path from 'path';
import fs from 'fs';
import { pipeline } from 'stream';

const dataOut = [];

const filePath = (dir) => path.resolve(__dirname, dir);
const writeStream = fs.createWriteStream(filePath('../assets/medAnvisaPrice.json'));
const readStream = fs.createReadStream(filePath('../assets/xls_conformidade_site_2021_01_v1.csv'));

// pipeline(readStream, csv(), writeStream, (err) => (err ? console.error(err) : null));

// If you want to import it into array of objects in the file
import readline from 'readline';
const readInterface = readline.createInterface({
  input: readStream.pipe(csv()),
  console: false,
});

readInterface.on('line', (data) => dataOut.push(JSON.parse(data)));
readInterface.on('close', () => writeStream.write(Buffer.from(JSON.stringify(dataOut))));
