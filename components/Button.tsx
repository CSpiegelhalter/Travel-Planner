import { useState, useEffect } from 'react'
import { ButtonProps } from '@/Types/types'

function Button(props: ButtonProps) {
  const [disabled, setDisabled] = useState(false)

  const handleClick = () => {
    if (disabled) return
    setDisabled(true)
    props.handler().then(() => {
        setDisabled(false)
      })
  }
  useEffect(() => {
  }, [disabled])
  return (
    <div>
      <button style={props.style} onClick={() => handleClick()} disabled={disabled} className={props.name}>
        {props.value}
      </button>
    </div>
  )
}

export default Button
