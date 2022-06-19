import React from 'react'
import classes from './Input.module.css'

function Input(props) {
  return (
    <input className={classes.myIput} {...props}/>
  )
}

export default Input