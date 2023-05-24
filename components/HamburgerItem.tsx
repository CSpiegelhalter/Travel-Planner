'use client'
import Link from 'next/link'
import styles from '../styles/componentStyles/Hamburger.module.css'

function HamburgerItem({ item, active }: any) {
  return (
    <>
      <Link
        className={active ? styles.burgerLinkSelected : styles.burgerLinkDeselected}
        href={item.href}
        prefetch={false}
      >
        {item.name}
      </Link>
    </>
  )
}

export default HamburgerItem
