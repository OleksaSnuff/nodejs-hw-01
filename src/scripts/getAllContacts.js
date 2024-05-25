import { readAllFromFile } from '../utils/readFromFile.js';

export const getAllContacts = async () => {
  try {
    return await readAllFromFile();
  } catch (error) {
    if (error.code !== 'ENONET') {
      console.error('Error reading existing contacts:', error.message);
      return;
    }
  }
};

console.log(await getAllContacts());
