import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ItemDetailDialogProps } from './ControlInterfaces';
import defaultImage from '../../images/default-image_300.png';

const ItemDetailDialog = (props: ItemDetailDialogProps) => {
    const imageUrl = props.dialogItem && props.dialogItem.posterPath 
                        ? `${props.baseImageUrl}${props.dialogItem?.posterPath}`
                        : defaultImage;
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
    <DialogTitle id="confirmation-dialog-title">{props.dialogItem && props.dialogItem.title}</DialogTitle>
    <DialogContent>
        <Grid container>
            <Grid item>
                <img src={imageUrl} alt={props.dialogItem && props.dialogItem.title} />
            </Grid>
            <Grid item>
                <Grid container direction='column' >
                    <Grid item>
                        <Typography component='h3'>
                            Overview
                        </Typography>
                        <Typography component='h4'>
                            {props.dialogItem && props.dialogItem.overview}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography component='h3'>
                            Popularity
                        </Typography>
                        <Typography component='h4'>
                            {props.dialogItem && props.dialogItem.popularity}
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