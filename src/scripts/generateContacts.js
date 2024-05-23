import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  let existedContacts = [];
  existedContacts = await readAllFromFile();

  let contactsjsonData = [];
  for (let i = 0; i < number; i++) {
    const newContact = createFakeContact();
    contactsjsonData.push(newContact);
  }
  const updContacts = [...existedContacts, ...contactsjsonData];

  addToFile(updContacts);
};

await generateContacts(15);

async function addToFile(updContacts) {
  try {
    const jsonContacts = JSON.stringify(updContacts);
    await fs.writeFile(PATH_DB, jsonContacts);
    console.log('Succefully added!');
  } catch (error) {
    console.log('Error writing all contacts:', error.message);
  }
}

async function readAllFromFile() {
  try {
    const data = await fs.readFile(PATH_DB);
    return JSON.parse(data);
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.error('Error reading existing contacts:', error.message);
      return;
    }
  }
}
