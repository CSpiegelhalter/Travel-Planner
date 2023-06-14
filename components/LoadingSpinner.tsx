import styles from '@/styles/componentStyles/LoadingSpinner.module.css'

function LoadingSpinner() {
  return (
    <div className={styles.ldsRoller}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default LoadingSpinner
