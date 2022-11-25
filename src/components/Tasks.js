// 81- Set a reminder onTogglereminder 

import React from 'react'
import Task from './Task'
 
const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
     
     <>
      {tasks.map((task)=>(
      <Task key={task.id} task={task} 
      onDelete={onDelete} onToggle={onToggle}/>
      ))}
     </>
    )
  }
  
  export default Tasks



/* Delete lesson
import React from 'react'
import Task from './Task'
 
const Tasks = ({tasks, onDelete}) => {
    return (
     
     <>
      {tasks.map((task)=>(
      <Task key={task.id} task={task} 
      onDelete={onDelete}/>
      ))}
     </>
    )
  }
  
  export default Tasks
 */



 







/* //70 State top level discussion 
//import {useState} from 'react';
 
const Tasks = ({tasks}) => {
    return (
     //tasks.push this will not work because state is immutable it is a one-way data
     //setTasks([...tasks, {}]) 
     //we can invoke the setTasks method set what is already there using 
     //the spread operator
     //try to add a new object {}
     
     <>
      {tasks.map((task)=>(<h3 key={task.id}>{task.text}</h3>))}
     </>
    )
  }
  
  export default Tasks
 
 */ 

/* //69 -Intro to Context API or Redux global state App level state
//import {useState} from 'react';
 
 const Tasks = ({tasks}) => {
 
   
   return (
    //tasks.push this will not work because state is immutable it is a one-way data
    //setTasks([...tasks, {}]) 
    //we can invoke the setTasks method set what is already there using 
    //the spread operator
    //try to add a new object {}
    
    <>
     {tasks.map((task)=>(<h3 key={task.id}>{task.text}</h3>))}
    </>
   )
 }
 
 export default Tasks

 */



/* //69 -Intro to Context API or Redux global state App level state
import {useState} from 'react';
 
 const Tasks = () => {
    const [tasks, setTasks] = useState(
        [
            {
                id: 1, 
                text: 'Meeting at work appointment',
                day: 'Nov 22 at 8:00am', 
                reminder: true 
              },
              {
               id: 2, 
               text: 'Appointment with dentist',
               day: 'Nov 22 at 11:00am', 
               reminder: true 
             },
             {
               id: 3, 
               text: 'Buy grocery items',
               day: 'Nov 22 at 8:00am', 
               reminder: false 
             }
        ]
    )
   return (
    //tasks.push this will not work because state is immutable it is a one-way data
    //setTasks([...tasks, {}]) 
    //we can invoke the setTasks method set what is already there using 
    //the spread operator
    //try to add a new object {}
    
    <>
     {tasks.map((task)=>(<h3 key={task.id}>{task.text}</h3>))}
    </>
   )
 }
 
 export default Tasks


 */
/* //68Explain setTask invoke setTasks([...tasks, {}])
import {useState} from 'react';
 
 const Tasks = () => {
    const [tasks, setTasks] = useState(
        [
            {
                id: 1, 
                text: 'Meeting at work appointment',
                day: 'Nov 22 at 8:00am', 
                reminder: true 
              },
              {
               id: 2, 
               text: 'Appointment with dentist',
               day: 'Nov 22 at 11:00am', 
               reminder: true 
             },
             {
               id: 3, 
               text: 'Buy grocery items',
               day: 'Nov 22 at 8:00am', 
               reminder: false 
             }
        ]
    )
   return (
    //tasks.push this will not work because state is immutable it is a one-way data
    //setTasks([...tasks, {}]) 
    //we can invoke the setTasks method set what is already there using 
    //the spread operator
    //try to add a new object {}
    
    <>
     {tasks.map((task)=>(<h3 key={task.id}>{task.text}</h3>))}
    </>
   )
 }
 
 export default Tasks
 */

/* //67- Remember that state is immutable we cannot do tasks.push
import {useState} from 'react';
 
 const Tasks = () => {
    const [tasks, setTasks] = useState(
        [
            {
                id: 1, 
                text: 'Meeting at work appointment',
                day: 'Nov 22 at 8:00am', 
                reminder: true 
              },
              {
               id: 2, 
               text: 'Appointment with dentist',
               day: 'Nov 22 at 11:00am', 
               reminder: true 
             },
             {
               id: 3, 
               text: 'Buy grocery items',
               day: 'Nov 22 at 8:00am', 
               reminder: false 
             }
        ]
    )
   return (
    //tasks.push this will not work because state is immutable it is a one-way data
    //setTasks([...tasks, {}]) 
    //we can invoke the setTasks method set what is already there using 
    //the spread operator
    //try to add a new object {}
    
    <>
     {tasks.map((task)=>(<h3 key={task.id}>{task.text}</h3>))}
    </>
   )
 }
 
 export default Tasks

 */


/* //66-Solve error and useState in const tasks,setTasks function to set state and update using function
import {useState} from 'react';
 
 const Tasks = () => {
    const [tasks, setTasks] = useState(
        [
            {
                id: 1, 
                text: 'Meeting at work appointment',
                day: 'Nov 22 at 8:00am', 
                reminder: true 
              },
              {
               id: 2, 
               text: 'Appointment with dentist',
               day: 'Nov 22 at 11:00am', 
               reminder: true 
             },
             {
               id: 3, 
               text: 'Buy grocery items',
               day: 'Nov 22 at 8:00am', 
               reminder: false 
             }
        ]
    )
   return (
    <>
     {tasks.map((task)=>(<h3 key={task.id}>{task.text}</h3>))}
    </>
   )
 }
 
 export default Tasks
 */
/* //64- .map > Jsx> List > error child list unique key 
const task = [
    {
      id: 1, 
      text: 'Meeting at work appointment',
      day: 'Nov 22 at 8:00am', 
      reminder: true 
    },
    {
     id: 2, 
     text: 'Appointment with dentist',
     day: 'Nov 22 at 11:00am', 
     reminder: true 
   },
   {
     id: 3, 
     text: 'Buy grocery items',
     day: 'Nov 22 at 8:00am', 
     reminder: false 
   }
 ]
 
 const Tasks = () => {
   return (
    <>
     {task.map((task)=>(<h3 key={task.id}>{task.text}</h3>))}
    </>
   )
 }
 
 export default Tasks */

/* //63- create list and use map() method
const task = [
   {
     id: 1, 
     text: 'Meeting at work appointment',
     day: 'Nov 22 at 8:00am', 
     reminder: true 
   },
   {
    id: 2, 
    text: 'Appointment with dentist',
    day: 'Nov 22 at 11:00am', 
    reminder: true 
  },
  {
    id: 3, 
    text: 'Buy grocery items',
    day: 'Nov 22 at 8:00am', 
    reminder: false 
  }
]

const Tasks = () => {
  return (
   <>
    {task.map((task)=>(<h3>{task.text}</h3>))}
   </>
  )
}

export default Tasks */
/* 
//62- Create template and variable called Task and set to array with placeholder task 
const task = [
    {
      id: 1, 
      text: 'Meeting at work appointment',
      day: 'Nov 22 at 8:00am', 
      reminder: true 
    },
    {
     id: 2, 
     text: 'Appointment with dentist',
     day: 'Nov 22 at 11:00am', 
     reminder: true 
   },
   {
     id: 3, 
     text: 'Buy grocery items',
     day: 'Nov 22 at 8:00am', 
     reminder: false 
   },
 ]
 
 const Tasks = () => {
   return (
    <>
     {task.map((task)=>(){})}
    </>
   )
 }
 
 export default Tasks */