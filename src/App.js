// 87- Add a random id Math.floor(Math.random * 10000 +1)
import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

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
    ])

    // ADD TASK
    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) +1
      //console.log(id)
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
    }
    
    //DELETE A TASK 
  const deleteTask = (id) =>{
      setTasks(
        tasks.filter((task) => task.id !== id)
      )
  }

  // TOGGLE TASK 

  const toggleActive = (id)=>{
    setTasks(tasks.map((task)=>task.id === id ? 
    {...task, reminder: !task.reminder } : task ))
  }


  return (
    <div className="container animate__heartBeat">
      <Header 
      onAdd={()=>setShowAddTask(!showAddTask)} 
      showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleActive}/>: 'No tasks to accomplish'}
    </div>
  );
}

export default App; 

/* // 86- Input component level state test console log data 
import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
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
    ])

    // ADD TASK
    const addTask = (task) => {
      console.log(task)
    }
    
    //DELETE A TASK 
  const deleteTask = (id) =>{
      setTasks(
        tasks.filter((task) => task.id !== id)
      )
  }

  // TOGGLE TASK 

  const toggleActive = (id)=>{
    setTasks(tasks.map((task)=>task.id === id ? 
    {...task, reminder: !task.reminder } : task ))
  }


  return (
    <div className="container animate__heartBeat">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleActive}/>: 'No tasks to accomplish'}
    </div>
  );
}

export default App;  */

/* // 82- toggle object remnder property from true to false and check react dev tools
import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
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
    ])
    
    //DELETE A TASK 
  const deleteTask = (id) =>{
      setTasks(
        tasks.filter((task) => task.id !== id)
      )
  }

  // TOGGLE TASK 

  const toggleActive = (id)=>{
    setTasks(tasks.map((task)=>task.id === id ? 
    {...task, reminder: !task.reminder } : task ))
  }


  return (
    <div className="container animate__heartBeat">
      <Header />
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleActive}/>: 'No tasks to accomplish'}
    </div>
  );
}

export default App;  */

/* // 81- Set a reminder onTogglereminder 
import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
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
    ])
    
    //DELETE A TASK 
  const deleteTask = (id) =>{
      setTasks(
        tasks.filter((task) => task.id !== id)
      )
  }

  // TOGGLE TASK 

  const toggleActive = (id)=>{
    console.log(id)
  }


  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleActive}/>: 'No tasks to accomplish'}
    </div>
  );
}

export default App;  */

/* // 80- Use ternary In App.js condition and show No Tasks To Accomplish
import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
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
    ])
    
    //DELETE A TASK 
  const deleteTask = (id) =>{
      setTasks(
        tasks.filter((task) => task.id !== id)
      )
  }
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/>: 'No tasks to accomplish'}
    </div>
  );
}

export default App; 
 */
/* //79- setTasks(tasks.filter()) delete a componet task id 
import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
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
    ])
    
    //DELETE A TASK 
  const deleteTask = (id) =>{
      setTasks(
        tasks.filter((task) => task.id !== id)
      )
  }
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/>: 'No tasks to accomplish'}
    </div>
  );
}

export default App;  */


/* //78- Setup calling deleteTask id onClick()
import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
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
    ])
    
    //DELETE A TASK 
  const deleteTask = (id) =>{
      alert('delete task' + id);
      console.log('This is a delete task',id)
  }
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App; 
 */

/* //77- App.js explanation of deleting files. State gets passed down action gets passed up
import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
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
    ])
    
    //DELETE A TASK 
  const deleteTask = (id) =>{
      alert('delete task' + id);
      console.log('This is a delete task',id)
  }
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App; 
 */
/* 
// PropTypes isRequired example
import Header from './components/Header'


function App() {
  return (
    <div className="container">
      <Header />
      <h1>Hello World! Welcome to React!</h1>
    </div>
  );
}

export default App;  */



/* 
// PropTypes example
import Header from './components/Header'


function App() {
  return (
    <div className="container">
      <Header title={1} />
      <h1>Hello World! Welcome to React!</h1>
    </div>
  );
}

export default App; 
 */



/* 
// Overwriting defaultProps and destructuring example
import Header from './components/Header'


function App() {
  return (
    <div className="container">
      <Header title='Hello someone' />
      <h1>Hello World! Welcome to React!</h1>
    </div>
  );
}

export default App; 
 */


/* Props 2 example
import Header from './components/Header'


function App() {
  return (
    <div className="container">
      <Header title='Hello Elcid' />
      <h1>Hello World! Welcome to React!</h1>
    </div>
  );
}

export default App; 
 */


/* DEMO of class component inheritance from react
class App extends React.Component {
  render() {
    return <h1>This is a react class components</h1>
  }
}

export default App */




/* function App() {
  const name = "Rodrigo Lopez"
  //const x = true;
  const x = false;
  return (
    
    <div className="container">
     
      <h1>Hello World! Welcome to React!</h1>
      <h2>Welcome {name} to our React Crash Course!</h2>
      <h2>Lets compute 1 plus 1 equals {1+1} in JSX!</h2>
      <h2>I love JSX {x ? 'Yes' : 'No'} in JSX!</h2>

    </div>
     
  );
}

export default App;

 */

/* Simple template


function App() {
  return (
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a>
       </header>
     </div>

    <div className="App">
      <h1>Hello World! Welcome to React!</h1>
    </div>
  );
}

export default App;
 */
