import React from 'react'
import TaskItem from './TaskItem'

function TaskList({tasks, showIncomlete , setTaskStatus ,removeTask,setShowIncomlete}) {
  return (
    <>
    <ul className='task-list'>
        {tasks.filter(task=>showIncomlete ? task.status !==1 : true).map(task =>(
           <TaskItem key={task.id} task={task} setTaskStatus={setTaskStatus} removeTask={removeTask}/>
        ))}
    </ul>
    <div className='filter-wrapper'>
        <label htmlFor='filter' className='filter-label'>Show incompleted tasks only</label>
        <input type="checkbox" id='filter' checked={showIncomlete} onChange={(e)=> setShowIncomlete(e.target.checked)}/>
    </div>
  </>
  )
}

export default TaskList
