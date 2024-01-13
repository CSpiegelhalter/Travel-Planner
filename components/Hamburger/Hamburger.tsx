'use client'
import styles from './Hamburger.module.css'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
// import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

function Hamburger(props: any) {
  const HamburgerItem = dynamic(() => import('@/components/Hamburger/HamburgerItem'))

  // const router = useRouter()
  const items: Record<string, any>[] = [
    {
      id: 1,
      href: '/',
      name: 'Home',
    },
    {
      id: 2,
      href: '/profile',
      name: 'Profile',
    },
    {
      id: 3,
      href: props.user ? 'api/auth/logout' : 'api/auth/login',
      name: props.user ? 'Logout' : 'Login',
    },
  ]
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      <div className={styles.hamburgerContainer}>
        <div className={styles.circle} onClick={() => toggleOpen()}>
          <Image
            width={32}
            height={0}
            src="/hamburger.svg"
            alt="Hamburger dropdown list"
            loading="lazy"
            style={{ height: '50%', width: '50%' }}
          />
        </div>
        {isOpen && (
          <>
            <div className={styles.burgerBackground} onClick={() => setIsOpen(false)}></div>
            <div className={styles.burgerDropdownCLOSE}>
              {items.map((item, i) => (
                <HamburgerItem
                  // className="burger"
                  key={item.id}
                  item={item}
                  // setSelected={setSelected}
                  // setHovered={setHovered}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Hamburger
