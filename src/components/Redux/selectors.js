export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filters;

export const selectVisibleContacts = ({ contacts: { contacts }, filters }) => {
  if (!filters) {
    return contacts;
  }

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );
};
