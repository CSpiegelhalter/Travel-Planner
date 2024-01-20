'use client'
import styles from './Hamburger.module.css'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

function Hamburger({ user }: any) {
  const HamburgerItem = dynamic(() => import('@/components/Hamburger/HamburgerItem'))

  const itemsNotLoggedIn: Record<string, any>[] = [
    {
      id: 1,
      href: '/',
      name: 'Home',
    },
    {
      id: 2,
      href: `/api/auth/login?returnTo=map`,
      name: 'Login',
    },
  ]

  const itemsLoggedIn: Record<string, any>[] = [
    {
      id: 1,
      href: '/',
      name: 'Home',
    },
    {
      id: 2,
      href: '/saved',
      name: 'Saved Places',
    },
    {
      id: 3,
      href: '/profile',
      name: 'Profile',
    },
    {
      id: 4,
      href: '/api/auth/logout',
      name: 'Logout',
    },
  ]
  // const router = useRouter()
  const items: Record<string, any>[] = user ? itemsLoggedIn : itemsNotLoggedIn

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
            src="/static/hamburger.svg"
            alt="Hamburger dropdown list"
            loading="lazy"
            style={{ height: '50%', width: '50%' }}
          />
        </div>
        {isOpen && (
          <>
            <div className={styles.burgerBackground} onClick={() => setIsOpen(false)}></div>
            <div className={styles.burgerDropdownCLOSE}>
              {items.map((item) => (
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
