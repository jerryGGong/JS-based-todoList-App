import TodoInput from './components/TodoInput.js';
import TodoList from './components/TodoList.js'
import TodoStats from './components/TodoStats.js';
import TodoControls from './components/TodoControls.js';
import {loadData, saveData} from './utils/storages.js'

//import { model } from './model/model.js'

function App() {

  this.state = {
    todos: loadData(),
    selectedId: null
  }

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
    saveData(this.state.todos)
  }


  this.init = () => {
    // this.data = model
    // this.todoList = new TodoList(this.$todoList, this.data)
    this.render()
  }
  this.render = () => {
    const { todos, selectedId } = this.state

    document.getElementById('todo-input')?.remove()
    document.getElementById('todo-list')?.remove()
    document.getElementById('todo-controls')?.remove()
    document.getElementById('todo-stats')?.remove()


    // const appRoot = document.getElementById('app') || document.body
    // if (!document.getElementById('app')) {
    //   const wrapper = document.createElement('div')
    //   wrapper.id = 'app'
    //   appRoot.appendChild(wrapper)
    // }

    let app = document.getElementById('app')
    if(!app) {
      app = document.createElement('div')
      app.id = 'app'
      document.body.appendChild(app)
    } else {
      app.innerHTML = '' // 리랜더 시 init
    }

    const title = document.createElement('h1')
    title.textContent = 'Todo List Application'
    app.appendChild(title)

    const inputContainer = document.createElement('div')
    inputContainer.id = 'todo-input'
    app.appendChild(inputContainer)

    const listContainer = document.createElement('div')
    listContainer.id = 'todo-list'
    app.appendChild(listContainer)

    const controlContainer = document.createElement('div')
    controlContainer.id = 'todo-controls'
    app.appendChild(controlContainer)

    const statsContainer = document.createElement('div')
    statsContainer.id = 'todo-stats'
    app.appendChild(statsContainer)

    TodoInput({
      onAdd: (text) => {
        this.setState({
          ...this.state,
          todos: [...todos, { id: crypto.randomUUID(), name: text, isCompleted: false }]
        })
      }
    })

    TodoList({
      todos,
      selectedId,
      onToggle: (id) => {
        this.setState({
          ...this.state,
          todos: todos.map(todo =>
              todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
          )
        })
      },
      onDelete: (id) => {
        this.setState({ ...this.state, todos: todos.filter(todo => todo.id !== id) })
      },
      onSelect: (id) => {
        const { selectedId} = this.state
        this.setState({
          ...this.state,
          selectedId: selectedId === id ? null: id })
      },
      onEdit: (id, name) => {
        this.setState({
          ...this.state,
          todos: todos.map(todo => (todo.id === id ? { ...todo, name } : todo))
        })
      }
    })

    TodoControls({
      onClear: () => this.setState({ ...this.state, todos: [] }),
      onCompleteAll: () => this.setState({
        ...this.state,
        todos: todos.map(todo => ({ ...todo, isCompleted: true }))
      })
    })

    TodoStats({ todos })
  }

  this.init()
}

export default App

