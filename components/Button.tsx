import { useState, useEffect } from 'react'
import { ButtonProps } from '@/Types/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Button(props: ButtonProps) {
  const [disabled, setDisabled] = useState(false)

  const handleClick = (args: any) => {
    if (disabled) return
    setDisabled(true)
    props.handler(args).then(() => {
      setDisabled(false)
    })
  }

  useEffect(() => {}, [disabled])

  return (
    <div>
      <button style={props.style} onClick={() => handleClick(props.params)} disabled={disabled} className={props.name}>
        {props.img && <FontAwesomeIcon icon={props.img as any} />}
        <p className={props.buttonText ?? 'buttonText'}>{props.value}</p>
      </button>
    </div>
  )
}

export default Button
