import {useState} from 'react'
import TodoItem from './TodoItem'

function TodoForm() {
  const [change, setChange]=useState('')
  const [todos, setTodos]=useState([])
  const [isEditing, setIsEditing]=useState(false)
  const [currentTodo, setCurrentTodo]=useState()


  const handleChange =(e)=>{
    setChange(e.target.value)
    console.log(change)
  }

  const onSubmit =(e)=>{
    e.preventDefault();
    if (isEditing) {
      const updatedTodos=todos.map((todo)=>{
        return todo.id===currentTodo.id? {id:todo.id, value:change}: todo
      });
      setTodos(updatedTodos)
      setIsEditing(false)
    }
    else {
      setTodos([
        ...todos,
        {
          id: Math.floor(Math.random()*10000),
          value: change
        },
      ])
    }
    setChange("")
  }

  const handleDelete = id =>{
    const removedTodos=[...todos].filter(todo=>todo.id!==id)
      setTodos(removedTodos)
  }

  const editInput = text =>{
    setIsEditing(true)
    setChange(text)
  }

  console.log("current todo ", currentTodo)
  return (
    <div className="all">
      <div className="container">
        <h3 align="center" className="py-1 stroke">What's the Plan for Today?</h3>
        <form onSubmit={onSubmit}>
          <div className="py-2 flexx">
            <input className="form-control"  value={change} type="text" placeholder="Add todo..." onChange={handleChange} required/> &nbsp;
            <input className="btn btn-primary" type="submit" value="Add Todo"/>
          </div>
        </form>
        <ol className="mt-3">
        {
          todos.map((todo, i)=>(
              <TodoItem key={i} todo={todo} handleDelete={handleDelete} editInput={editInput} setCurrentTodo={setCurrentTodo}/>
          ))
        }
        </ol>
      </div>
    </div>
  );
}

export default TodoForm;
