import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ItemDetailDialogProps } from './ControlInterfaces';

const ItemDetailDialog = (props: ItemDetailDialogProps) => {
    return (
        <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="md"
        fullWidth={false}
        onEntered={props.onEntered}
        aria-labelledby="confirmation-dialog-title"
        open={props.openDialog}
    >
    <DialogTitle id="confirmation-dialog-title">Phone Ringtone</DialogTitle>
    <DialogContent>
        <Grid container>
            <Grid item>
                <img src='https://image.tmdb.org/t/p//w185//bVq65huQ8vHDd1a4Z37QtuyEvpA.jpg'  />
            </Grid>
            <Grid item>
                <Grid container direction='column' >
                    <Grid item>
                        <Typography component='h3'>
                            Complete Overview
                        </Typography>
                        <Typography component='h4'>
                            Overview content
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography component='h3'>
                            Popularity
                        </Typography>
                        <Typography component='h4'>
                            19.982
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </DialogContent>
    <DialogActions>
        <Button onClick={props.onClickDialogOk} color="primary">
        Ok
        </Button>
    </DialogActions>
    </Dialog>  
    );
}

export default ItemDetailDialog;