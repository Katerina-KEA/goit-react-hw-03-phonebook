import PropTypes from 'prop-types';
import { Button } from 'components/ContacForm/ContactForm.styled';
import { List, Item } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteBtn }) => {
  return (
    <List>
      {contacts.map(contact => {
        // const {id} = contact;
        return (
          <Item key={contact.id}>
            <span>{contact.name}</span>
            <span>{contact.number}</span>
            <Button onClick={() => onDeleteBtn(contact.id)}>Delete</Button>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  filter: PropTypes.string.isRequired,
  onDeleteBtn: PropTypes.func.isRequired,
};