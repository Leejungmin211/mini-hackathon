import { BiHomeHeart, BiCalendarHeart, BiUserCircle } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  margin-right: 20px;
`;
const NavStyle = styled(NavLink)`
  .home {
    width: 65px;
    height: 65px;
    color: #afafaf;
  }
  .calendar {
    width: 60px;
    height: 60px;
    color: #afafaf;
  }
  .user {
    width: 62px;
    height: 62px;
    color: #afafaf;
  }
`;
export default function BottomNav() {
  return (
    <Nav>
      <NavStyle to="/">
        <BiCalendarHeart className="calendar" />
      </NavStyle>
      <NavStyle to="/todolist">
        <BiHomeHeart className="home" />
      </NavStyle>
      <NavStyle to="/userpage">
        <BiUserCircle className="user" />
      </NavStyle>
    </Nav>
  );
}
