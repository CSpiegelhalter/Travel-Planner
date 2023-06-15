import { useUser } from '@auth0/nextjs-auth0/client'
import React, { useState } from 'react'
import styles from '@/styles/componentStyles/Modal.module.css'
import { Modal } from '@/Types/types'

function Modal(props: Modal) {
  const [tripName, setTripName] = useState('')
  const { user, error, isLoading } = useUser()
  const userId = user?.['https://example.com/id']

  const addTripToDB = async () => {
    //     const params = {
    //         trip_name: tripName,
    //         user_id: userId
    //     }
    //     const options = {
    //       method: 'POST',
    //       body: JSON.stringify(params),
    //     }
    //     const data = await fetch('/api/saveAttraction', options)
    console.log('I was clicked')
  }

  function handleStateChange(e: any) {
    setTripName(e.target.value)
    console.log(tripName)
  }

  return (
    <div>
      <div className={styles.darkBG} onClick={() => props.setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modalContainer}>
          <div className={styles.topContainer}>
            <button className={styles.closeBtn} onClick={() => props.setIsOpen(false)}>
              x
            </button>
            <h1 className={styles.heading}>Create a new Trip!</h1>

            <div className={styles.modalContent}>
              <p className={styles.modalP}>Please enter the name of your trip:</p>
              <div className={styles.spacingContainer}></div>
              <input
                type="form"
                placeholder="Name of new trip"
                onChange={(e) => {
                  handleStateChange(e)
                }}
                className={styles.inputBar}
              />
            </div>
          </div>
          <div className={styles.bottomContainer}>
            <button className={styles.addToTripBtn} onClick={addTripToDB}>
              Add Trip!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
