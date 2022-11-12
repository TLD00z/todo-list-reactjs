//import React,{ useState } from 'react';
import { useState } from 'react';
import './App.css';
import AddTaskForm from './component/AddTaskForm';
import Header from './component/Header';
import TaskList from './component/TaskList';

function App() {
  const [tasks,setTasks] = useState([
   {id:"task_1",title: "Learn JS", status:1},
   {id:"task_2",title:"Code a Todo List" , status:0}])
  const [showIncomlete, setShowIncomlete] = useState(true)
  const [newTask, setNewTask] = useState("")
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(newTask){
      const task ={
        id : Date.now(),
        title: newTask,
        status:0
      }
      setTasks([...tasks,task])
      setNewTask("")
    }
  }
  const handleInput= (e)=>{
    setNewTask(e.target.value)
  }
  const setTaskStatus = (tasksId,status )=>{
    setTasks(tasks.map(task =>{
      if (task.id === tasksId){
        return {...task,status: status ? 1 : 0}
      }
      return task
    }))
  }
  const removeTask =(taskId)=>{
    setTasks(tasks.filter(task => task.id !== taskId))
    
  }
  return (
    <div className='container'>
      <Header/>
      <TaskList  tasks={tasks} showIncomlete={showIncomlete}  setTaskStatus={setTaskStatus} removeTask={removeTask} setShowIncomlete={setShowIncomlete}/>
      <AddTaskForm handleSubmit={handleSubmit} newTask={newTask} handleInput={handleInput} />
    
    </div>
  );
}

export default App;
