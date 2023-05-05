import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  max-width: 350px;
  flex-direction: column;
`;

const TextFilter = styled.p`
  color: black;
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 5px 0;
  text-transform: uppercase;
`;

const InputFilter = styled.input`
  border: none;
  border-bottom: 2px solid #7d7a7a;
  padding: 6px 20px;
  font-size: 16px;
  &:focus {
    border-color: #12d400;
    outline: none;
  }
`;
export { Container, TextFilter, InputFilter };
