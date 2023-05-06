import styled from 'styled-components';
import UserInput from '../component/UserInput';
import MyImage from '../image/kitty.jpg';

const UserContainer = styled.div`
  display: flex;
  height: 600px;
  justify-content: center;
  align-items: center;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 100%;
`;
export default function UserPage() {
  return (
    <UserContainer>
      <Div>
        <Img src={MyImage} />
        <UserInput />
      </Div>
    </UserContainer>
  );
}
