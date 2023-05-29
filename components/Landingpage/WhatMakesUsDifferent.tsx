import Image from 'next/image'
import styles from '@/styles/componentStyles/WhatMakesUsDifferent.module.css'
import { HandlerProps } from '@/Types/types'

function WhatMakesUsDifferent({ handler }: HandlerProps) {
  return (
    <div className={styles.differentContainer}>
      <p className={styles.contentHeader}>What makes us different?</p>
      <div className={styles.googleContainer}>
        <Image
          width={0}
          height={300}
          layout="responsive"
          src="/google.webp"
          alt="Illustration of finding things to do on phones"
          onLoad={() => handler()}
        />
        <div>
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
    </div>
  )
}

export default WhatMakesUsDifferent
