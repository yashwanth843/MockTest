import {Component} from 'react'
import {v4} from 'uuid'

import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    isChecked: false,
    isChanged: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    isChecked: false,
    isChanged: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    isChecked: false,
    isChanged: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    isChecked: false,
    isChanged: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    isChecked: false,
    isChanged: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    isChecked: false,
    isChanged: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    isChecked: false,
    isChanged: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    isChecked: false,
    isChanged: false,
  },
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
    searchInput: '',
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodosList = todosList.filter(eachTodo => eachTodo.id !== id)

    this.setState({
      todosList: updatedTodosList,
    })
  }

  onClickButton = id => {
    const {todosList} = this.state
    const index = todosList.findIndex(each => each.id === id)
    if (index !== -1) {
      const updatedTodosList = [...todosList]
      console.log(updatedTodosList)
      updatedTodosList[index].isChecked = !updatedTodosList[index].isChecked
      this.setState({todosList: updatedTodosList})
    }
  }

  changeText = id => {
    const {todosList} = this.state
    const indexs = todosList.findIndex(each => each.id === id)
    if (indexs !== -1) {
      const updatedTodosList1 = [...todosList]
      console.log(updatedTodosList1)
      updatedTodosList1[indexs].isChanged = !updatedTodosList1[indexs].isChanged
      this.setState({todosList: updatedTodosList1})
    }
  }

  updatedTodoText = (id, text) => {
    const {todosList} = this.state
    const spot = todosList.findIndex(each => each.id === id)

    if (spot !== -1) {
      const updatedText = [...todosList]
      updatedText[spot].title = text
      this.setState({todosList: updatedText})
    }
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickAddButton = () => {
    const {searchInput} = this.state
    const matches = searchInput.match(/^(.+?)\s(\d+)$/)
    let newTodos = []

    if (matches) {
      const text = matches[1]
      const count = parseInt(matches[2], 10)
      for (let i = 0; i < count; i += 1) {
        newTodos.push({
          id: v4(),
          title: text,
          isChecked: false,
          isChanged: false,
        })
      }
    } else {
      newTodos = [
        {
          id: v4(),
          title: searchInput,
          isChecked: false,
          isChanged: false,
        },
      ]
    }

    this.setState(prevState => ({
      todosList: [...prevState.todosList, ...newTodos],
      searchInput: '',
    }))
  }

  render() {
    const {todosList, searchInput} = this.state
    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="searchInputContainer">
            <input
              type="text"
              placeholder="Enter Todos Task"
              className="searchInput"
              value={searchInput}
              onChange={this.onChangeSearch}
            />
            <button
              type="button"
              className="addButton"
              onClick={this.onClickAddButton}
            >
              Add
            </button>
          </div>
          <ul className="todos-list">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
                checked={this.onClickButton}
                changeText={this.changeText}
                updatedTodoText={this.updatedTodoText}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
