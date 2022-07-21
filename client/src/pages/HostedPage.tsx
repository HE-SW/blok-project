import Hosting from '../components/Editor/Hosting';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f7f7f9;
`;

export default function HostedPage() {
  return (
    <Container>
      <Hosting />
    </Container>
  );
}