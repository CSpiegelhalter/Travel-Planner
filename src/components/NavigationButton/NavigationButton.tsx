import Link from 'next/link'
import { NavigationButtonProps } from '@/Types/types'
import styles from './NavigationButton.module.css'

function NavigationButton({ displayText, href, textStyle }: NavigationButtonProps) {
  return (
    <>
      <Link prefetch={false} className={styles.navigationButtonText} style={textStyle} href={href}>
        {displayText}
      </Link>
    </>
  )
}

export default NavigationButton
