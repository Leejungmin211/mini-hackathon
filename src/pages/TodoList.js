import { useState } from "react"
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
  const [todos, setTodos] = useState([
       { id: '1', text: '운동하기', status: 'Active', date: today },
       { id: '2', text: '공부하기', status: 'Active', date: today },
       { id: '3', text: '리액트 공부하기', status: 'Active', date: tomorrow },
   ])

    return(
        <Section>
          <TodoListDate today={today} tomorrow={tomorrow} todos={todos} setTodos={setTodos}/>
         
        </Section>
    )
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