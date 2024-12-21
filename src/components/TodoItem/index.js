import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo, checked, changeText, updatedTodoText} = props
  const {id, title, isChecked, isChanged} = todoDetails
  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  const onClickTick = () => {
    checked(id)
  }

  const onClickChange = () => {
    changeText(id)
  }

  const updatedInput = event => {
    updatedTodoText(id, event.target.value)
  }

  const strike = isChecked ? 'strike' : ''
  const text = isChanged ? 'Save' : 'Edit'

  return (
    <li className="todo-item">
      <input type="checkbox" className="checkbox" onClick={onClickTick} />
      {isChanged ? (
        <input
          type="text"
          onChange={updatedInput}
          value={title}
          className="changeTodo"
        />
      ) : (
        <p className={`title ${strike}`}>{title}</p>
      )}
      <button type="button" className="delete-btn" onClick={onClickChange}>
        {text}
      </button>
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
