import React from 'react'

import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  
    return <button onClick={onClick} style={{backgroundColor: color}} className='btn'>{text}</button>
}


Button.defaultProps = {
  color: '#005',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}


export default Button
/* 
// 58- Pass in the events object as a parameter (e)
import PropTypes from 'prop-types'

const Button = ({ color, text }) => {
    const onClick = (event) => {
      alert('This is an example of an onClick event!!!')
      console.log(event);
    }
    return <button onClick={onClick} style={{backgroundColor: color}} className='btn'>{text}</button>
}


Button.defaultProps = {
  color: '#005',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}


export default Button


 */
/* // Intro to events onClick 
import PropTypes from 'prop-types'

const Button = ({ color, text }) => {
    const onClick = () => {
      alert('This is an example of an onClick event!!!')
    }
    return <button onClick={onClick} style={{backgroundColor: color}} className='btn'>{text}</button>
}


Button.defaultProps = {
  color: '#005',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}


export default Button */




/* 
// Create defaultButton add Import for PropTypes
const Button = ({ color, text }) => {
  // return <button className='btn'>Add Task</button>
    return <button style={{backgroundColor: color}} className='btn'>{text}</button>
}


Button.defaultProps = {
  color: '#005',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}


export default Button

 */

/* Add props color text
const Button = ({ color, text }) => {
  // return <button className='btn'>Add Task</button>
    return <button style={{backgroundColor: color}} className='btn'>{text}</button>
}

export default Button */