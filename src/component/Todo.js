import styled from "styled-components"
import { RiCloseFill } from 'react-icons/ri';

const Li = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 10px;
height: 55px;
margin: 7px;
padding: 10px 15px;
font-size: 17px;
letter-spacing: 0.7px;
background-color: #dde9f3;
`
const Div = styled.div`
padding: 0px 10px;
 > input{
     margin-right: 10px;
  }
`
const Input = styled.input`
width: 15px;
height: 15px;
border: 2px solid rgb(9 78 171);
border-radius: 4px;
`
const Button = styled.button`
border: none;
background: rgba(255, 255, 255, 0);
  > .close-icon{
    font-size: 20px;
  }
`

export default function Todo({todo, onUpdate, onDelete}) {
    const { text, status } = todo
    const handleChange = (e) => {
      const status = e.target.checked ? 'Completed' : 'Active'
      onUpdate({...todo, status})
    }
    return(
        <Li>
          <Div>
          <Input type="checkbox" id="checkbox" checked={status === 'Completed'} onChange={handleChange}/>
          <label htmlFor="checkbox">{text}</label>
          </Div>
          <Button onClick={() => onDelete(todo)}><RiCloseFill className="close-icon"/></Button>
        </Li>
    )
}