import { readAllFromFile } from '../utils/readFromFile.js';

export const countContacts = async () => {
  try {
    const allConatcts = await readAllFromFile();
    return allConatcts.length;
  } catch (error) {
    if (error.code !== 'ENONET') {
      console.error('Error reading existing contacts:', error.message);
      return;
    }
  }
};

console.log(await countContacts());
