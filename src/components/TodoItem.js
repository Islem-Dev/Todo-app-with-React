import React, {useState} from 'react'

function TodoItem({todo, handleDelete, editInput, setCurrentTodo}) {
  const [checked, setChecked]=useState(false)
  const spanStyle = {
    textDecoration: checked? "line-through" : "none" ,
    fontStyle: checked && "italic",
  }
  const liStyle = {
    backgroundColor: checked? "rgba(255, 0, 0, 0.384)" : "#5bc0de81"
  }
  const handleCheck = () =>{
    setChecked(!checked)
  }

  const del = () =>{
    handleDelete(todo.id)
  }

  const edit =()=>{
    editInput(todo.value)
    setCurrentTodo(todo)
  }

  return (
    <li style={liStyle} className="my-1 flexx">
      <span className="text-capitalize" style={spanStyle} onClick={handleCheck}>{todo.value}</span>
      <div>
        <button className="btn btn-sm btn-info" onClick={edit}>Edit</button> &nbsp;
        <button className="btn btn-sm btn-danger" onClick={del}>Delete</button>
      </div>
    </li>
  )
}

export default TodoItem
