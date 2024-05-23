import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    const allConatcts = JSON.parse(data);
    return allConatcts.length;
  } catch (error) {
    if (error.code !== 'ENONET') {
      console.error('Error reading existing contacts:', error.message);
      return;
    }
  }
};

console.log(await countContacts());
