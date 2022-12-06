import React from 'react';
import './style.scss'
import clsx from 'classnames'

interface ButtonProps{
    text:string
    colored?:boolean
    icon?:string
    onClick?:React.MouseEventHandler<HTMLButtonElement>
    disabled?:boolean
    style?:React.CSSProperties
}

export default function Button({text, style, disabled, onClick, icon, colored, ...rest}:ButtonProps) {
  const btnClasses = clsx({
    'btn_default': !colored && !disabled,
    "btn_colored":colored && !disabled,
    "btn_disabled":disabled
  })
  return (
    <button className={btnClasses} style={style} {...rest} onClick={onClick} disabled={disabled}>
       {icon && <img src={icon} alt=''/>} <span>{text}</span>
    </button>
  );
}
