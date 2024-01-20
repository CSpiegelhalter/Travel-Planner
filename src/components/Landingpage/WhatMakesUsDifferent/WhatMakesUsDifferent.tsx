import Image from 'next/image'
import styles from './WhatMakesUsDifferent.module.css'

function WhatMakesUsDifferent() {
  return (
    <div className={styles.differentContainer}>
      <div className={styles.imageWithTitle}>
        <p className={styles.contentHeader}>What makes us different?</p>
        <div className={styles.googleContainer}>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            loading="lazy"
            className={styles.googleSearch}
            src="/google.webp"
            alt="Google search"
          />
        </div>
      </div>

      <div className={styles.description}>
        <p className={styles.contentDescription}>
          While these are must-see attractions in Paris, they are likely to appear on every “things to do in Paris”
          list.
        </p>
        <p className={styles.contentDescription}>
          However, if you want to explore beyond the typical tourists spots and discover other equally extraordinary
          places, you might need to do some additional research!
        </p>
        <p className={styles.emphasisDescription}>That’s where we come in.</p>
      </div>
    </div>
  )
}

export default WhatMakesUsDifferent
