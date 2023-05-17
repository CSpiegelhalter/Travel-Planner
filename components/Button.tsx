import React, { MouseEventHandler, useState, useEffect } from 'react'
import { ButtonProps } from '@/Types/types'

function Button(props: ButtonProps) {
  const [disabled, setDisabled] = useState(false)

  const handleClick = () => {
    console.log(props.params)
    console.log(Object.values(props.params))
    
    setDisabled(true)
    props.handler(props.params).then(() => {
      setDisabled(false)
    })
  }
  useEffect(() => {

  }, [])
  return (
    <div>
      <button style={props.style} onClick={() => handleClick()} disabled={disabled} className={props.name}>
        {props.value}
      </button>
    </div>
  )
}

export default Button
