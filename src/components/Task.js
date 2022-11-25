//84 Task.js set the activeReminder class to green border
import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
      <div className={`task ${task.reminder ? 'activeReminder' : ''}`} onDoubleClick={() =>onToggle(task.id)}>
          <h3 className='animate__animated animate__rubberBand'>
            <FaTimes style={{color:'red', cursor:'pointer'}} 
            onClick={() => onDelete(task.id)}/> 
            {task.text} 
          </h3>
          <p>{task.day}</p>
      </div>
    )
  }
  
  export default Task

/* //81- Set a reminder onTogglereminder 
import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
      <div className="task" onDoubleClick={() =>onToggle(task.id)}>
          <h3 className='animate__animated animate__rubberBand'>
            <FaTimes style={{color:'red', cursor:'pointer'}} 
            onClick={() => onDelete(task.id)}/> 
            {task.text} 
          </h3>
          <p>{task.day}</p>
      </div>
    )
  }
  
  export default Task */

/* import React from 'react'

//78-Setup calling deleteTask id onClick() delete task 1 2 3
import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete}) => {
    return (
      <div className="task">
          <h3>
            <FaTimes style={{color:'red', cursor:'pointer'}} 
            onClick={() => onDelete(task.id)}/> 
            {task.text} 
          </h3>
          <p>{task.day}</p>
      </div>
    )
  }
  
  export default Task
 */

/* import React from 'react'

//75-import react-icons 
import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete}) => {
    return (
      <div className="task">
          <h3>
            <FaTimes style={{color:'red', cursor:'pointer'}} 
            onClick={onDelete}/> 
            {task.text} 
          </h3>
          <p>{task.day}</p>
      </div>
    )
  }
  
  export default Task
 */










/* 
//73-Add paragraph task.day
const Task = ({task}) => {
    return (
      <div className="task">
          <h3>{task.text}</h3>
          <p>{task.day}</p>
      </div>
    )
  }
  
  export default Task
 */
















/* 
//72-Catch the prop and setup h3 to see our task.text 
const Task = ({task}) => {
    return (
      <div className="task">
          <h3>{task.text}</h3>
      </div>
    )
  }
  
  export default Task */

/* //71-Create Task prop and import Task from './Task'
const Task = () => {
  return (
    <div className="task">
        <h3>Daily Task</h3>
    </div>
  )
}

export default Task */