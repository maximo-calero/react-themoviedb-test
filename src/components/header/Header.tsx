import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import HomeTwoTone from '@material-ui/icons/HomeTwoTone';
import InfoTwoTone from '@material-ui/icons/InfoTwoTone';
// import Grid from '@material-ui/core/Grid';
import { MenuBar } from '../styled/MenuBar'
import { MenuItem } from '../styled/MenuItem'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const styles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        }
    }),
);

const Header = () => {
    const classes = styles();
    return (
        <header>
            <nav>
            <MenuBar>
                <MenuItem><Link to='/'>Home</Link></MenuItem>
                <MenuItem><Link to='/about'>About</Link></MenuItem>
            </MenuBar>                
                {/* <Button
                    key={1}
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<HomeTwoTone />}
                >
                    <Link to='/'>Home</Link>
                </Button>
                <Button
                    key={2}
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<InfoTwoTone />}
                >
                    <Link to='/about'>About</Link>
                </Button>                 */}
            </nav>
        </header>
    );
}

export default Header