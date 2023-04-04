import React, { MouseEventHandler } from 'react'

type ButtonProps = {
  handler: MouseEventHandler
  name: string
  value: string
}

function Button(props: ButtonProps) {
  return (
    <div>
      <button onClick={() => props.handler(props.value)} className={props.name}>
        {props.value}
      </button>
    </div>
  )
}

export default Button
