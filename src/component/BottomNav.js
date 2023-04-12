import { useState } from "react";
import { BiHomeHeart } from 'react-icons/bi';
import { BiCalendarHeart } from 'react-icons/bi';
import { BiUserCircle } from 'react-icons/bi';
import { Link } from "react-router-dom";
import styled from "styled-components"

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  margin-bottom: 20px;

  .home{
    width: 65px;
    height: 65px;
    color: #AFAFAF;
  }
  .calendar{
    width: 60px;
    height: 60px;
    color: #AFAFAF;
  }
  .user{
    width: 62px;
    height: 62px;
    color: #AFAFAF;
  }
  .active{
    color: #6541da;
    transition: 1s;
  }
`
export default function BottomNav(){
  const [activeNav, setActiveNav] = useState(1)
    return(
        <Nav>
            <Link to="/" onClick={() => setActiveNav(1)}>
              <BiCalendarHeart className={activeNav === 1? "calendar active" : "calendar"}/>
            </Link>
            <Link to="/todolist" onClick={() => setActiveNav(2)}>
              <BiHomeHeart className={activeNav === 2? "home active" : "home"} />
            </Link>
            <Link to="/userpage" onClick={() => setActiveNav(3)}>
              <BiUserCircle className={activeNav === 3? "user active" : "user"} />
            </Link>
        </Nav>
    )
}

