// 'use client'

import Link from 'next/link'
import styles from './Hamburger.module.css'

interface HamburgerItemProps {
  item: Record<string, any>
}
function HamburgerItem({ item }: HamburgerItemProps) {
  return (
    <>
      <Link prefetch={false} className={styles.burgerLinkSelected} href={item.href} >
        {item.name}
      </Link>
    </>
  )
}

export default HamburgerItem
