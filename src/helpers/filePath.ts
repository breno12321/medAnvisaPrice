import path from 'path';

export const filePath =  (dir: string): string => path.resolve(__dirname, dir);
