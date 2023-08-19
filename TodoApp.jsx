import { useGetTodoByIdQuery, useGetTodosQuery } from "./src/store/apis/todosApi"


export default function TodoApp() {
    //const {data, isLoading, error} = useGetTodosQuery()
    const {data, isLoading, error} = useGetTodoByIdQuery()

  return (
    <>
        <h1>Todos - RTK Query</h1>
        <hr />

        {
            isLoading && <p>Loading...</p>
        }

        <pre></pre>

        {
            error && <p>{error}</p>
        }

        {/* {
            data && data.map((todo) => (
                <p key={todo.id}>{todo.title} <strong>{todo.completed ? "Done" : "Pending"}</strong></p>
            ))
        } */}

    </>
  )
}
