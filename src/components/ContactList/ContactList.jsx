import { useDispatch } from 'react-redux';
import { Ul, Li, Text } from './ContactList.styled';
import { deleteContact } from 'components/Redux/contactsSlice';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'components/Redux/selectors';
export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

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
