import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    fs.writeFile(PATH_DB, '[]');
    console.log('Contacts successfully removed!');
  } catch (error) {
    console.error('Error removing existing contacts:', error.message);
  }
};

await removeAllContacts();
