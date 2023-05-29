import Link from 'next/link'
import styles from '../styles/componentStyles/Hamburger.module.css'

interface HamburgerItemProps {
  actives: boolean;
  item: Record<string, any>;
  setSelected: any;
  setHovered: any;
  className: string
}
function HamburgerItem({ item, actives }: HamburgerItemProps) {
  return (
    <>
      <Link
        className={actives ? styles.burgerLinkSelected : styles.burgerLinkDeselected}
        href={item.href}
        prefetch={false}
      >
        {item.name}
      </Link>
    </>
  )
}

export default HamburgerItem
