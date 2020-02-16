import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuBar, MenuItem } from './styled/MenuComponents'
import { createStyles, 
    makeStyles, 
    Theme } from '@material-ui/core/styles';
  
  export const useMenuStyles = makeStyles((theme: Theme) => 
      createStyles({
          selectedMenuItem: {
              fontWeight: 'bold',
          },
      })
  );

const Header = () => {
    const styles = useMenuStyles();
    return (
        <header>
            <nav>
                <MenuBar>
                    <MenuItem><NavLink activeClassName={styles.selectedMenuItem} to='/' exact>Home</NavLink></MenuItem>
                    <MenuItem><NavLink activeClassName={styles.selectedMenuItem} to='/my-rated-movies'>My Rated Movies</NavLink></MenuItem>
                    <MenuItem><NavLink activeClassName={styles.selectedMenuItem} to='/about'>About</NavLink></MenuItem>
                </MenuBar>
            </nav>
        </header>
    );
}

export default Header