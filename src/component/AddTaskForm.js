import React from 'react'

function AddTaskForm({handleSubmit ,newTask ,handleInput}) {
  return (
    <form action='#' onSubmit={handleSubmit} className='form'>
        <label htmlFor='newitem'>Add to the todo list</label>
        <input type="text" id="newitem" value={newTask} onChange={handleInput}/>
        <button type='submit'>Add Item</button>
    </form>
  )
}

export default AddTaskForm
