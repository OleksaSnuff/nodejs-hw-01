import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  let existedContacts = await readAllFromFile();

  const newContact = createFakeContact();
  const updContacts = [...existedContacts, newContact];

  addToFile(updContacts);
};

await addOneContact();

async function readAllFromFile() {
  try {
    const data = await fs.readFile(PATH_DB);
    return JSON.parse(data);
  } catch (error) {
    if (error.code !== 'ENONET') {
      console.error('Error reading existing contacts:', error.message);
      return;
    }
  }
}

async function addToFile(updContacts) {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updContacts));
    console.error('Succesfully added!');
  } catch (error) {
    console.error('Error writing all contacts:', error.message);
  }
}
