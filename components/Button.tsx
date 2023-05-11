import React, { MouseEventHandler, useState, useEffect } from 'react'


type ButtonProps = {
  handler?: any
  name: string
  value: string
  style?: React.CSSProperties

}

function Button(props: ButtonProps) {
  const [disabled, setDisabled] = useState(false)

  const handleClick = () => {
    setDisabled(true)
    props.handler(props.value).then(() => {
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
