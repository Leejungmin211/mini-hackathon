import styled from "styled-components"
import Todo from "./Todo"
import AddTodo from "./AddTodo"

const TodoPost = styled.div`
width: 500px
`
const Div = styled.div`
display: flex;
align-items: center;
margin: 12px;
justify-content: space-between;
`
const Ul = styled.ul`
margin-bottom: 70px;
border: 1.5px solid pink;
border-radius: 10px;
padding: 10px;

`

export default function TodoListDate({today, tomorrow, todos, setTodos}) {
  const handleAdd = (todo) => {setTodos([...todos, todo])}
  const handleUpdate = (updated) => {setTodos(todos.map((item) => item.id === updated.id ? updated : item))}
  const handleDelete = (deleted) => {setTodos(todos.filter((item) => item.id !== deleted.id))}
  console.log(todos)
  const todayTodo = todos.filter((todo) => {
    if(todo.date === today) return todo
  })

  const tomorrowTodo = todos.filter((todo) => {
    if(todo.date === tomorrow) return todo
  })  
  
    return(
      <TodoPost>
        <Div>
           오늘 <span>{today}</span>
          <AddTodo onAdd={handleAdd} today={today}/>
        </Div>
        <Ul>    
          {todayTodo.map((item) => 
          <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete}/>)}
        </Ul>
        <Div>
          내일 <span>{tomorrow}</span>
         <AddTodo onAdd={handleAdd} tomorrow={tomorrow}/>
        </Div>
        <Ul>    
         {tomorrowTodo.map((item) => 
          <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete}/>)}
        </Ul>
    </TodoPost>
  )
}


