import React, { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'



function Dropdown(props: any) {
    const [selector, setSelector] = useState('Bucket List')

    const selectorHandler = (val: any) => {
        setSelector(val)
    } 
    
 
    return (
        <div className='dropdown-container' >
        <DropdownMenu.Root >
          <DropdownMenu.Trigger >{selector}</DropdownMenu.Trigger>
          <DropdownMenu.Content loop>
            {selector !== 'Bucket List' && <DropdownMenu.Item className='dropdown-item' onClick={() => {selectorHandler('Bucket List')}}>Bucket List</DropdownMenu.Item>} 
            {props.tripsList.map((item: string, index: number) => (
                <DropdownMenu.Item className='dropdown-item' key={index} onClick={() => {selectorHandler(item)}}>{item}</DropdownMenu.Item>
            ))}
            <DropdownMenu.Item className='dropdown-item'>Create new trip...</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
    </div>
    );
}

export default Dropdown;