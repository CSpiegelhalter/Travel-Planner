import Link from 'next/link'
import styles from '../styles/componentStyles/NavBar.module.css'
import Image from 'next/image'
import { NavBarProps } from '@/Types/types'

function NavBar(props: NavBarProps) {
  const testList = ['spain', 'rome', 'vacay', 'our getaway']

  const iconItems = [
    {
      selected: props.map,
      selectedImage: '/mapIconSelected.webp',
      unselectedImage: '/mapIconUnselected.webp',
      href: '/mapTool',
      name: 'Maps',
      alt: 'Map icon'
    },
    {
      selected: props.trips,
      selectedImage: "/backpackIconSelected.webp",
      unselectedImage: "/backpackUnhighlighted.webp",
      href: '/trips',
      name: "Trips",
      alt: "Backpack Icon",
    },
    {
      selected: props.bucketList,
      selectedImage: "/saveIconSelected.webp",
      unselectedImage: "/savedIconUnselected.webp",
      href: "/bucketList",
      name: "Bucket List",
      alt: "Save Icon",
    },
    {
      selected: props.profile,
      selectedImage: "/backpackIconSelected.webp",
      unselectedImage: "/backpackUnhighlighted.webp",
      href: "/profilePage",
      name: "Profile",
      alt: "Backpack Icon",
    },
  ]

  return (
    <header className={styles.mainHeader}>
      <Image className={styles.logo}
        src='/Logo.webp'
        alt='Logo'
        width={60}
        height={60}
      />
      <div className={styles.buttonContainer}>
        {iconItems.map((info, index) => (
        <Link key={index} className={styles.link}
          href={info.href}
          prefetch={false}
          style={{ textDecoration: 'none' }}
        >
          <div className={styles.navBtn}>
            <Image
              src={info.selected ? info.selectedImage : info.unselectedImage}
              alt={info.alt}
              width={50}
              height={50}
            />
            <p className={styles.btnLabels} style={info.selected ? { color: '#0000EF' } : { color: 'grey' }}>{info.name}</p>
          </div>
        </Link>
        ))}
      </div>
    </header>
  )
}

export default NavBar
