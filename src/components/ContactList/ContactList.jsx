import { useDispatch } from 'react-redux';
import { Ul, Li, Text } from './ContactList.styled';
import { deleteContact } from 'components/Redux/contactsSlice';
import { useSelector } from 'react-redux';
import {
  selectFilter,
  selectVisibleContacts,
} from 'components/Redux/selectors';
export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const filter = useSelector(selectFilter);
  console.log('contacts', contacts);
  console.log('filter', filter);

  return (
    <Ul>
      {contacts.length > 0 &&
        contacts.map(({ name, id, number }) => (
          <Li key={id}>
            <Text>
              {name} tel: <span> {number}</span>
            </Text>

            <button
              type="button"
              name="delete"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </Li>
        ))}
    </Ul>
  );
};
