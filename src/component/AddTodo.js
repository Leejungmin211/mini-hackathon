import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { RiHeartAddLine } from 'react-icons/ri';
import styled from "styled-components"

 const ModalBackdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  top:0;
  bottom:0;
  left:0;
  right:0;
  position: fixed;
  z-index: 1;
`;

const ModalView = styled.div.attrs((props) => ({
    role: 'dialog',
  }))`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    background-color: white;
    width: 300px;
    height: 250px;
    border-radius: 30px;
    > button {
      background-color: #ffffff00;
      color: black;
      border: none;
      font-size: 20px;
    }
  `;
  const Input = styled.input`
  width: 200px;
  height: 35px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #880d88;
  padding: 0px 10px;
  `
  const Button = styled.button`
  border: none;
  background-color: #ffffff00;
  margin-right: 10px;
   > .heart-add{
    width: 25px;
    height: 25px;
    color: #555555;
   }
  `
  const DayInput = styled.input`
  width: 35px;
  height: 35px;
  margin: 0px 10px;
  `
  const Daylabel = styled.label`
  font-size: 15px;
  `

export default function AddTodo({onAdd, today, tomorrow}) {
    const [isOpen, setIsOpen] = useState(false)
    const [text, setText] = useState('')

    const openModalHandler = () => {setIsOpen(!isOpen)}
    const handleTextChange = (e) => {setText(e.target.value)}
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length === 0) return
        if(today){
          onAdd({id: uuidv4(), text, status:'Active', date: today })
          setText('')
          setIsOpen(false)
        }
        if(tomorrow){
          onAdd({id: uuidv4(), text, status:'Active', date: tomorrow })
          setText('')
          setIsOpen(false)
        }
    }
  
  return (
    <div>
        <Button onClick={openModalHandler}><RiHeartAddLine className="heart-add"/></Button>
        {isOpen? <ModalBackdrop onClick={openModalHandler}>
            <ModalView onClick={(e) => e.stopPropagation()}>
            <button onClick={openModalHandler}><img src="../close.png" /></button>
             <form onSubmit={handleSubmit}>
             <Input type="text" placeholder="Todo를 입력해주세요" value={text} onChange={handleTextChange}/>
             <button>Add</button>
             </form>
            </ModalView>
        </ModalBackdrop> : null}
    </div>
  )
}
