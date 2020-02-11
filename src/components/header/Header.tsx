import React from 'react';
import { Link } from 'react-router-dom';
import { MenuBar, MenuItem } from '../styled/MenuComponents'

const Header = () => {
    return (
        <header>
            <nav>
                <MenuBar>
                    <MenuItem><Link to='/'>Home</Link></MenuItem>
                    <MenuItem><Link to='/about'>About</Link></MenuItem>
                </MenuBar>
            </nav>
        </header>
    );
}

export default Header