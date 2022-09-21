
import "./todoItem.scss"

// const TodoItem = ({children, title}) => {
//   return <li>{children}</li>
// }
const TodoItem = ({handleDeleteTodo,props,handleCompleted}) => {
   const {title, id, isComplated} = props
  return <li>

      <input checked={isComplated} onChange={handleCompleted} data-todo-id={id} type="checkbox" />
      <strong className={isComplated && "completed" }>{title}</strong>
      <button onClick={handleDeleteTodo} data-todo-id={id}>Delete</button>

  </li>
}


export default TodoItem