import styled from "styled-components"
import Todo from "./Todo"
import AddTodo from "./AddTodo"
import { useState } from "react"
import TodoList from "../pages/TodoList"

const TodoPost = styled.div`
width: 500px
`
const Div = styled.div`
display: flex;
align-items: baseline;
margin: 12px;
font-size: 25px;
font-weight: 500;
justify-content: space-between;
  > .day-span{
  font-size: 17px;
  font-weight: 400;
 }
.day{
  > .plan-todo{
    font-size: 17px;
    color: rgb(10 105 233);
    padding-left: 15px;
  }
}
`
const Ul = styled.ul`
margin-bottom: 70px;
border: 1.5px solid #fcc8d1;
border-radius: 10px;
padding: 10px;
`

export default function TodoListDate({today, tomorrow, todos, setTodos}) {
  const handleAdd = (todo) => {setTodos([...todos, todo])}
  const handleUpdate = (updated) => {setTodos(todos.map((item) => item.id === updated.id ? updated : item))}
  const handleDelete = (deleted) => {setTodos(todos.filter((item) => item.id !== deleted.id))}
  const todayPlan = todos.filter((todo) => {
    if(todo.status === 'Active' && todo.date === today) return todo
  })
  const tomorrowPlan = todos.filter((todo) => {
    if(todo.status === 'Active' && todo.date === tomorrow) return todo
  })
  
  const todayTodo = todos.filter((todo) => {
    if(todo.date === today) return todo
  })

  const tomorrowTodo = todos.filter((todo) => {
    if(todo.date === tomorrow) return todo
  })  
  
    return(
      <TodoPost>
        <Div>
          <div className="day">
           오늘
            <span className="plan-todo">
              {todayPlan.length > 0 ? `할 일 ${todayPlan.length}개 남음` : '완료' }</span>
          </div>
            <span className="day-span">{today}</span>
        </Div>
        <Ul>    
          {todayTodo.map((item) => 
          <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete}/>)}
          <AddTodo onAdd={handleAdd} today={today}/>
        </Ul>
        <Div>
        <div className="day">
          내일
          <span className="plan-todo">
            {tomorrowPlan.length > 0 ? `할 일 ${tomorrowPlan.length}개 남음` : '완료' }</span>
        </div>
          <span className="day-span">{tomorrow}</span>
        </Div>
        <Ul>    
         {tomorrowTodo.map((item) => 
          <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete}/>)}
          <AddTodo onAdd={handleAdd} tomorrow={tomorrow}/>
        </Ul>
    </TodoPost>
  )
}


