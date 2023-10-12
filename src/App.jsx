
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  

  return (
    <>
      <h1 className="text-black text-xl font-semibold">Todo App with Redux</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
