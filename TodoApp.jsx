import { useState } from "react"
import { useGetTodoByIdQuery, useGetTodosQuery } from "./src/store/apis/todosApi"


export default function TodoApp() {
    const [todoId, setTodoId] = useState(1)
    //const {data, isLoading, error} = useGetTodosQuery()
    const {data, isLoading, error} = useGetTodoByIdQuery(todoId)

  return (
    <>
        <h1>Todos - RTK Query</h1>
        <hr />

        {
            isLoading && <p>Loading...</p>
        }

        <pre>{
            JSON.stringify(data, null, 2)
            }</pre>

        {
            error && <p>{error}</p>
        }

        <button onClick={() => setTodoId(todoId + 1)}>Siguiente Todo</button>
        {
            todoId > 1 && <button onClick={() => setTodoId(todoId - 1)}>Anterior Todo</button>
        }


        {/* {
            data && data.map((todo) => (
                <p key={todo.id}>{todo.title} <strong>{todo.completed ? "Done" : "Pending"}</strong></p>
            ))
        } */}

    </>
  )
}
