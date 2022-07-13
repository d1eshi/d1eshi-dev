const App = () => {
  return (
    <TodoList>
      {todos.map(todo => (
        <TodoItem {...todo} />
      ))}
    </TodoList>
  )
}

const TodoList = ({ children }) => {
  return <section>{children}</section>
}
