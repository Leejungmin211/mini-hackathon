import { useState, useEffect } from 'react';
import { format, addDays } from 'date-fns';
import koLocale from 'date-fns/locale/ko';
import styled from 'styled-components';
import TodoListDate from '../component/TodoListDate';

const Section = styled.section`
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
`;
export default function TodoList() {
  const today = new Date();
  const tomorrow = addDays(today, +1);
  const [todos, setTodos] = useState(() => readTodos());

  const formattedToday = format(today, 'yyyy년 M월 d일 (iii)', {
    locale: koLocale,
  });
  const formattedTomorrow = format(tomorrow, 'yyyy년 M월 d일 (iii)', {
    locale: koLocale,
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <Section>
      <TodoListDate
        today={formattedToday}
        tomorrow={formattedTomorrow}
        todos={todos}
        setTodos={setTodos}
      />
    </Section>
  );
}

function readTodos() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}
