export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = ({ contacts: { contacts }, filter }) => {
  if (!filter) {
    console.log(null);
    return contacts;
  }
  console.log(true);
  return contacts.filter(contact =>
    contact.text.toLowerCase().includes(filter.toLowerCase())
  );
};
