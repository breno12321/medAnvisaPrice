import readline from 'readline';
import fs from 'fs';
import path from 'path';

const dataOut = [];

const filePath = (dir) => path.resolve(__dirname, dir);

const readInterface = readline.createInterface({
  input: fs.createReadStream(filePath('../assets/medAnvisaPrice.json')),
  console: false,
});

readInterface.on('line', (data) => dataOut.push(JSON.parse(data)));
readInterface.on('close', () => {
  console.log('File converted to JSONs');
});
