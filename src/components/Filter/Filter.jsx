import { Container, TextFilter, InputFilter } from './Filter.styled';
import PropTypes from 'prop-types';

function Filter({ filter, onChange }) {
  return (
    <Container>
      <TextFilter>Find contacts by name</TextFilter>
      <InputFilter
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </Container>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
};

export default Filter;
