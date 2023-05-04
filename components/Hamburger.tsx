import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
    HamburgerMenuIcon,
    DotFilledIcon,
    CheckIcon,
    ChevronRightIcon,
} from '@radix-ui/react-icons';
import styles from '../styles/componentStyles/Hamburger.module.css'

function Hamburger(props: any) {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className="IconButton" aria-label="Customise options">
                    <HamburgerMenuIcon />
                </button>
            </DropdownMenu.Trigger>
        </DropdownMenu.Root>
    );
}

export default Hamburger;