import { Root, Trigger, Portal, Content, Item } from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import styles from '../styles/componentStyles/Hamburger.module.css'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client'

function Hamburger(props: any) {
  return (
    <Root>
      <Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <HamburgerMenuIcon />
        </button>
      </Trigger>

      <Portal>
        <Content className="DropdownMenuContent" sideOffset={5}>
          {(props.user as any) && (
            <Item className={styles.DropdownMenuItem}>
              <Link href="/api/auth/logout">Logout</Link>
            </Item>
          )}
          {!props.user && (
            <Item className={styles.DropdownMenuItem}>
              <Link href="/api/auth/login">Login/Signup</Link>
            </Item>
          )}
          <Item className={styles.DropdownMenuItem}>
            <Link href="/profilePage"> Profile</Link>
          </Item>
          <Item className={styles.DropdownMenuItem}>
            <Link href="/home">Home</Link>
          </Item>
        </Content>
      </Portal>
    </Root>
  )
}

export default Hamburger
