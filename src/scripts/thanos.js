import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  let allConatcts = await readAllFromFile();

  const updatedContacts = allConatcts.filter((contact) => {
    const randomNumber = Math.random();
    if (randomNumber >= 0.5) {
      return contact;
    }
  });

  updateContacts(updatedContacts);
};

await thanos();

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

async function updateContacts(updatedContacts) {
  try {
    const newContacts = JSON.stringify(updatedContacts);
    await fs.writeFile(PATH_DB, newContacts);
    console.log('Thanos work successfully!');
  } catch (error) {
    console.log('Error updating contacts:', error.message);
  }
}
