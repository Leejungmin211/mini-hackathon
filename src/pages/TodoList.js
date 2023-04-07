import { useState, useEffect } from "react"
import styled from "styled-components"
import TodoListDate from "../component/TodoListDate"

const Section = styled.section`
height: 100%;
overflow: auto;
display: flex;
justify-content: center;
`
export default function TodoList() {
  const today = koreaDate()
  const tomorrow = koreaNextDate()
  const [todos, setTodos] = useState(() => readTodos());
    
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return(
      <Section>
        <TodoListDate today={today} tomorrow={tomorrow} todos={todos} setTodos={setTodos}/>   
      </Section>
    )
}

function readTodos() {
  console.log('readTodos');
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function koreaDate() {
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayName = today.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });
  
  return `${dateString} ${dayName}`;
}

function koreaNextDate() {
  const today = new Date();
  const tomorrow = new Date(today.setDate(today.getDate() +1));
  const dateString = tomorrow.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayName = tomorrow.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });
  
  return `${dateString} ${dayName}`;
}

