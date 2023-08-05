export const selectContacts = state => state.phonebook.contacts;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = ({ phonebook: { contacts }, filter }) => {
  if (!filter) {
    console.log(null);
    return contacts;
  }
  console.log(true);
  return contacts.filter(contact =>
    contact.text.toLowerCase().includes(filter.toLowerCase())
  );
};
