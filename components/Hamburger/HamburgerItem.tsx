import Link from 'next/link'
import styles from './Hamburger.module.css'

interface HamburgerItemProps {
  item: Record<string, any>;
}
function HamburgerItem({ item }: HamburgerItemProps) {
  return (
    <>
      <Link
        className={styles.burgerLinkSelected}
        href={item.href}
        prefetch={false}
      >
        {item.name}
      </Link>
    </>
  )
}

export default HamburgerItem
