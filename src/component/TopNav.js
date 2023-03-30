import styled from "styled-components"

const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
height: 50px;
`

const Logo = styled.div`
font-size: 35px;
`
export default function TopNav() {
    return(
        <Nav>
            <Logo>Todo</Logo>
            <div>image</div>
        </Nav>
    )
}