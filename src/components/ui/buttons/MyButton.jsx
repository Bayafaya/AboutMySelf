import React from 'react'
import classes from './MyBtn.Module.css'

function Button ({children,...props}) {
  return (
    <button {...props} className={classes.MyBtn}>{children}</button>
  )
}

export default Button;