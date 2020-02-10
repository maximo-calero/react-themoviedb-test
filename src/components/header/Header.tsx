import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import HomeTwoTone from '@material-ui/icons/HomeTwoTone';
import InfoTwoTone from '@material-ui/icons/InfoTwoTone';
import Grid from '@material-ui/core/Grid';

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
            <Grid container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                <Grid item>
                    <Button
                        variant="contained"
                        color="default"
                        className={classes.button}
                        startIcon={<HomeTwoTone />}
                    >
                        <Link to='/'>Home</Link>
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="default"
                        className={classes.button}
                        startIcon={<InfoTwoTone />}
                    >
                        <Link to='/about'>About</Link>
                    </Button>                
                </Grid> 
            </Grid>
               
        </header>
    );
}

export default Header