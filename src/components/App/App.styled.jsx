import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  margin: 15px 0 30px;
  font-weight: 800;
  font-size: 2em;
`;
const SubTitle = styled.h2`
  text-align: center;
  margin: 15px 0 30px;
  font-weight: 800;
  font-size: 2em;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 1000px;
  margin: 0 auto;
  gap: 30px;
`;
const Notification = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8d7da;
  color: #721c24;
  border-radius: 5px;
  font-size: 23px;
  font-weight: bold;
  padding: 0 20px;
  min-width: 300px;
`;
const FormWrap = styled.div``;
const ContactWrap = styled.div``;

export { Title, Container, FormWrap, ContactWrap, SubTitle, Notification };
