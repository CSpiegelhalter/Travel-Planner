import styles from '../styles/componentStyles/TripDisplay.module.css'

function TripDisplay(props: any) {




  return (
    <div onClick={() => props.setLocationDetails(props.value)} className={styles.cardContainer}>
      <h3>{props.name}</h3>
      <h3>{props.length} Saved Locations</h3>
    </div>
  )



}


export default TripDisplay;