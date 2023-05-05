import { PropTypes } from 'prop-types';
import { Name, Number, DeleteButton, Container } from './Contact.styled';

const ContactListItem = ({ id, name, number, onClick }) => {
  return (
    <Container>
      <Name>{name}:</Name>
      <Number>{number}</Number>
      <DeleteButton type="button" onClick={() => onClick(id)}>
        Delete
      </DeleteButton>
    </Container>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactListItem;
