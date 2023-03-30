import { useState } from "react"
import Todo from "../component/Todo"

export default function TodoList() {
  const [todos, setTodos] = useState([
       { id: '1', text: '운동하기', status: 'Active' },
       { id: '2', text: '공부하기', status: 'Active' },
   ])

   const handleUpdate = (updated) => {
    setTodos()
   }
   const handleDelete = (deleted) => {
    setTodos()
   }
    return(
        <section>
            <ul>
            {todos.map((todo) => 
                <Todo key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
            )}
            </ul>
        </section>
    )
}