import React from 'react'
import './Button.css'

const Button = ({onClick,type,children}) => {
  return (
    <button className='ui_button' onClick = {onClick} type = {type}>
        {children}
        </button>
  )
}

export default Button
