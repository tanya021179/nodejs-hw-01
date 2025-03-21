import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

export const addOneContact = async () => {
    const contactList = await readContacts();
    const addContact = createFakeContact();
    writeContacts([...contactList, addContact]);
};

addOneContact();
