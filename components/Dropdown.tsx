import styles from '@/styles/componentStyles/dropdown.module.css'
import { useEffect, useState } from 'react'

const Dropdown = (props: any) => {
  const [showMenu, setShowMenu] = useState(false)
  const [selectedValue, setSelectedValue] = useState(null)

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
    if (selectedValue){
        return selectedValue
    }
    return props.placeHolder
  }

  const onItemClick = (trip: any) => {
    setSelectedValue(trip)
  }

  const isSelected = (trip: any) => {
    if(!selectedValue){
        return false
    }

    return selectedValue === trip
  }

  const tripClickHandler = () => {
    props.createNewTrip(true)
  }

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownInput} onClick={handleInputClick}>
        <div className={styles.dropdownMenu}>
          {showMenu && (
            <>
              {props.trips.map((trip: any, index: number) => (
                <div
                  key={index.toString()}
                  className={`${styles.dropdownItem} ${isSelected(trip) ? styles.selected : ''}`}
                  onClick={() => onItemClick(trip)}
                >
                  {trip}
                </div>
              ))}
              <div className={styles.dropdownItem} onClick={() => tripClickHandler()}>
                Create a new trip...
              </div>
            </>
          )}
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
