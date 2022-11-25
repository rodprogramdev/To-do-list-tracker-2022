import React from 'react'
//import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title, onAdd, showAdd}) => {
  /*  const onClick = () => {
      console.log('Test the onClick prop function onClick');
      alert('Test the onClick prop function onClick inside of the console');
   } */
    return (
      // <div>Header</div>
      <header className='header'>
         
          <h1>RBSL To-do-list Tracker</h1> 
          {/* <Button text='Add' color='green' onClick={onClick}/> */}
          {/* <Button text='Add' color='green' onClick={onAdd}/> */}
          <Button text={showAdd ? 'Close' : 'Add Tasks'} color={showAdd ? 'red' : 'green'} onClick={onAdd}/>
          
      </header>
    )
  }
  
  Header.defaultProps = {
      title: 'Hello Elcid To-Do-List Tracker',
  }
  
  Header.propTypes = {
      title: PropTypes.string.isRequired,
  }

  export default Header

/* 

  import React from 'react'
//import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title}) => {
   const onClick = () => {
      console.log('Test the onClick prop function onClick');
      alert('Test the onClick prop function onClick inside of the console');
   }
    return (
      // <div>Header</div>
      <header className='header'>
         
          <h1>RBSL To-do-list Tracker</h1> 
          <Button text='Add' color='green' onClick={onClick}/>
          <Button text='Delete' color='red' /> 
          <Button text='About'  />
      </header>
    )
  }
  
  Header.defaultProps = {
      title: 'Hello Elcid To-Do-List Tracker',
  }
  
  Header.propTypes = {
      title: PropTypes.string.isRequired,
  }

  export default Header




 */