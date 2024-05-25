import { createFakeContact } from '../utils/createFakeContact.js';
import { readAllFromFile } from '../utils/readFromFile.js';
import { updateContacts } from '../utils/updateContacts.js';

const generateContacts = async (number) => {
  let existedContacts = [];
  existedContacts = await readAllFromFile();

  let contactsjsonData = [];
  for (let i = 0; i < number; i++) {
    const newContact = createFakeContact();
    contactsjsonData.push(newContact);
  }
  const updContacts = [...existedContacts, ...contactsjsonData];

  updateContacts(updContacts);
};

await generateContacts(5);
