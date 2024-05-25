import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export async function updateContacts(updContacts) {
  try {
    const jsonContacts = JSON.stringify(updContacts);
    await fs.writeFile(PATH_DB, jsonContacts);
    console.log('Done!');
  } catch (error) {
    console.log('Error writing all contacts:', error.message);
  }
}
