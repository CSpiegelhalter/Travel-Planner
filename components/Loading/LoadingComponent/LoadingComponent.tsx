import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import styles from './LoadingComponent.module.css'

function LoadingComponent() {
  return (
    <div className={styles.loadingContainer}>
      <LoadingSpinner />
    </div>
  )
}

export default LoadingComponent
