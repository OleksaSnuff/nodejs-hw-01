import { readAllFromFile } from '../utils/readFromFile.js';
import { updateContacts } from '../utils/updateContacts.js';

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
