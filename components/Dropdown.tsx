import styles from '@/styles/componentStyles/dropdown.module.css'
import { useEffect, useState } from 'react'

const Dropdown = (props: any) => {
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
      const handler = () => setShowMenu(false)

      window.addEventListener("click", handler)
      return () => {
          window.removeEventListener('click', handler)
      }
  })


  const handleInputClick = (e: any) => {
    e.stopPropagation()
    setShowMenu(!showMenu)
  }

  const getDisplay = () => {
    return props.placeholder
  }

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownInput} onClick={handleInputClick}>
        <div className={styles.dropdownMenu}>
          {showMenu &&
            props.trips.map((trip: any, index: number) => (
              <div key={index.toString()} className={styles.dropdownItem} onClick={handleInputClick}>
                {trip}
              </div>
            ))}
        </div>
        <div className={styles.dropdownSelectedValue}>{getDisplay()}</div>
        <div className={styles.dropdownTools}>
          <div className={styles.dropdownTool}></div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
