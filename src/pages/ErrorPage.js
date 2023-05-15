import styled from 'styled-components';

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #d3deea;
`;
const Top = styled.div`
margin-top: 30px;
> h1{
    color: #EDEDED;
    text-align: center;
    font-size: 9em;
    margin: 0;
    text-shadow: -1px 0 #BFC0C0;, 0 1px #BFC0C0;, 1px 0 #BFC0C0;, 0 -1px #BFC0C0;;
}
> h3{
    font-size: 2em;
    text-transform: uppercase;
    text-align: center;
    color: #BFC0C0;
    margin-top: -20px;
    font-weight: 900;
}
`;
const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  > .btn {
    background: #ededed;
    padding: 15px 20px;
    margin: 5px;
    color: #585959;
    text-transform: uppercase;
    font-size: 0.6em;
    letter-spacing: 1px;
    border: 0;
    &:hover {
      background: #bfc0c0;
      transition: all 0.4s ease-out;
    }
  }
`;
export default function ErrorPage() {
  return (
    <BodyWrapper>
      <Top>
        <h1>404</h1>
        <h3>page not found</h3>
      </Top>
      <ButtonBox className="buttons">
        <button type="button" className="btn">
          Back
        </button>
        <button type="button" className="btn">
          Home
        </button>
      </ButtonBox>
    </BodyWrapper>
  );
}
