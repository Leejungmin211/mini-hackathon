import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { RiHeartAddLine } from 'react-icons/ri';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0px 10px 0px;
`;
const Form = styled.form`
  margin: 15px 0px;
  > .add-button {
    border: 2px solid #fcc8d1;
    border-radius: 10px;
    background: linear-gradient(180deg, rgb(252 200 209 / 75%), #ffe6e670);
    font-size: 20px;
    width: 60px;
    height: 45px;
    &:hover {
      background: linear-gradient(180deg, #ffe6e670, rgb(252 200 209 / 75%));
      transition: all 3s;
    }
  }
`;
const Input = styled.input`
  width: 390px;
  height: 45px;
  font-size: 15px;
  margin-right: 10px;
  border-radius: 10px;
  border: none;
  padding: 0px 10px;
  &:focus {
    outline: 2px solid #fcc8d1;
  }
`;
const Button = styled.button`
  border: none;
  background-color: #ffffff00;
  margin-right: 10px;
  > .heart-add {
    width: 30px;
    height: 30px;
    color: rgb(111 111 111);
  }
`;

export default function AddTodo({ onAdd, today, tomorrow }) {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState('');

  const openInputHandler = () => {
    setIsOpen(!isOpen);
  };
  const handleTextChange = e => {
    setText(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim().length === 0) return;
    if (today) {
      onAdd({ id: uuidv4(), text, status: 'Active', date: today });
      setText('');
      setIsOpen(false);
    }
    if (tomorrow) {
      onAdd({ id: uuidv4(), text, status: 'Active', date: tomorrow });
      setText('');
      setIsOpen(false);
    }
  };

  return (
    <Div>
      {isOpen && (
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Todo를 입력해주세요"
            value={text}
            onChange={handleTextChange}
          />
          <button type="button" className="add-button">
            Add
          </button>
        </Form>
      )}
      <Button onClick={openInputHandler}>
        <RiHeartAddLine className="heart-add" />
      </Button>
    </Div>
  );
}
