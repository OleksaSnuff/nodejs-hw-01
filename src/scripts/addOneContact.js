import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readAllFromFile } from '../utils/readFromFile.js';

export const addOneContact = async () => {
  let existedContacts = await readAllFromFile();

  const newContact = createFakeContact();
  const updContacts = [...existedContacts, newContact];

  await addToFile(updContacts);
};

await addOneContact();

async function addToFile(updContacts) {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updContacts));
    console.error('Succesfully added!');
  } catch (error) {
    console.error('Error writing all contacts:', error.message);
  }
}
