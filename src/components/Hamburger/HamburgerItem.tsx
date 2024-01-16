// 'use client'

import Link from 'next/link'
import styles from './Hamburger.module.css'

interface HamburgerItemProps {
  item: Record<string, any>
}
function HamburgerItem({ item }: HamburgerItemProps) {
  return (
    <>
      <a className={styles.burgerLinkSelected} href={item.href}>
        {item.name}
      </a>
    </>
  )
}

export default HamburgerItem
