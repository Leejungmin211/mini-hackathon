
import { Link } from "react-router-dom";
import styled from "styled-components"

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`
const Img = styled.img`
  width: 80px;
`


export default function BottomNav(){
    return(
        <Nav>
            <Link to="/"><Img src="../home-gray.png" alt="user" /></Link>
            <Link to="/todolist"><Img src="../todolist-gray.png" alt="todolist" /></Link>
            <Link to="/userpage"><Img src="../user-gray.png" alt="todolist" /></Link>
        </Nav>
    )
}