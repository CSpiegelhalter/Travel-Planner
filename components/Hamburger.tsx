import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
    HamburgerMenuIcon
} from '@radix-ui/react-icons';
import styles from '../styles/componentStyles/Hamburger.module.css'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client';


function Hamburger(props: any) {

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className="IconButton" aria-label="Customise options">
                    <HamburgerMenuIcon />
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
                   { props.user as any &&
                   <DropdownMenu.Item  className={styles.DropdownMenuItem}>
                    <Link href="/api/auth/logout">Logout</Link>
                    </DropdownMenu.Item>
                        }
                        {!props.user &&
                    <DropdownMenu.Item  className={styles.DropdownMenuItem}>
                        <Link href="/api/auth/login">Login/Signup</Link>
                    </DropdownMenu.Item> 
                   }
                    <DropdownMenu.Item className={styles.DropdownMenuItem}>
                    <Link href="/profilePage"> Profile</Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className={styles.DropdownMenuItem}>
                    <Link href="/home">Home</Link>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
}

export default Hamburger;