import styled from "styled-components"

const Li = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 10px;
height: 55px;
margin: 7px;
padding: 10px;
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
const Button = styled.button`
border: none;
background-color: white;
`
const Img = styled.img`
width: 12px;
heigth; 12px;
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
          <input type="checkbox" id="checkbox" checked={status === 'Completed'} onChange={handleChange}/>
          <label htmlFor="checkbox">{text}</label>
          </Div>
          <Button onClick={() => onDelete(todo)}><Img src="../close.png" /></Button>
        </Li>
    )
}