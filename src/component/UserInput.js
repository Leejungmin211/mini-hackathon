import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const InputView = styled.div`
margin: 30px;
display:flex;
flex-direction: column;
align-items: center;
font-size: 23px;
`
const Div = styled.div`
text-align: center;
display: inline-block;
width: 200px;
height: 30px;
border-bottom: 1px solid #bbb;
margin: 20px;
`
const Input = styled.input`
text-align: center;
display: inline-block;
width: 150px;
height: 30px;
outline: none;
border: none;
font-size: 20px;
background-color: #ffffff00;
`

export const MyInput = ({value, handleValueChange}) => {
    const inputEl = useRef(null);
    const [isEditMode, setEditMode] = useState(false);
    const [newValue, setNewValue] = useState(value);
    
    useEffect(() => {
        if (isEditMode) {
          inputEl.current.focus();
        }
      }, [isEditMode]);
    
      useEffect(() => {
        setNewValue(value);
      }, [value]);

      const handleClick = () => {
        setEditMode(true)
      };
    
      const handleBlur = () => {
        setEditMode(false)
        handleValueChange(newValue);
      };
    
      const handleInputChange = (e) => {
        setNewValue(e.target.value)
      };

      return(
       <Div>
         {isEditMode ? (
        <Input
          type='text'
          value={newValue}
          ref={inputEl}
          onBlur={handleBlur}
          onChange={handleInputChange}
        />
      ) : (
        <span onClick={handleClick}
        >{newValue}</span>  )}
       </Div>
      )
}

export default function UserInput() {
    const [name, setName] = useState("Leejungmin");
    const [text, setText] = useState("SEB-FE-43");

    return(
        <InputView>
            <MyInput 
            className="input"
            type="text"
            value={name}
            handleValueChange={(value) => setName(value)}/>
            <MyInput
            className="input"
            type="text"
            value={text}
            handleValueChange={(value) => setText(value)} />
        </InputView>
    )
}