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
import Chip from '@material-ui/core/Chip';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        firstColumn: {
            marginRight: '0.900rem',
        },
        secondColumn: {
            width: '40%',
        },
        thirdColumn: {
            width: '40%',
        },
        keywordChip: {
            margin: '0.050rem',
        },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },        
    })
);

const ItemDetailDialog = (props: ItemDetailDialogProps) => {
    const imageUrl = props.dialogItem && props.dialogItem.posterPath 
                        ? `${props.baseImageUrl}${props.dialogItem?.posterPath}`
                        : defaultImage;
    const styles = useStyles();
    return (
        <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            maxWidth="lg"
            fullWidth={false}
            onEntered={props.onEntered}
            aria-labelledby="confirmation-dialog-title"
            open={props.openDialog}
        >
            <DialogTitle id="confirmation-dialog-title">{props.dialogItem && props.dialogItem.title}</DialogTitle>
            <DialogContent>
                <Backdrop className={styles.backdrop} open={props.showBackdrop}>
                    <CircularProgress color="inherit" />
                </Backdrop>
                <Grid container direction='row'>
                    <Grid item className={styles.firstColumn}>
                        <img src={imageUrl} alt={props.dialogItem && props.dialogItem.title} />
                    </Grid>
                    <Grid item className={styles.secondColumn}>
                        <Grid container direction='column' >
                            <Grid item>
                                <Typography variant="h6" gutterBottom>
                                    Overview
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    {props.dialogItem && props.dialogItem.overview}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" gutterBottom>
                                    Popularity
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    {props.dialogItem && props.dialogItem.popularity}
                                </Typography>
                            </Grid>
                            {/* <Grid item>
                                <Typography variant="h6" gutterBottom>
                                    Keywords
                                </Typography>
                                <div>
                                    {props.keywords.length >0 &&
                                        props.keywords.map(item => {
                                            return(
                                                <Chip className={styles.keywordChip} key={item.id} label={item.name} />
                                            )
                                        })
                                    }
                                </div>                    
                            </Grid> */}
                        </Grid>
                    </Grid>
                    <Grid item className={styles.thirdColumn}>
                        <Grid container direction='column' >
                            <Grid item>
                                <Typography variant="h6" gutterBottom>
                                    Genres
                                </Typography>
                                <div>
                                    {props.genres.length > 0 &&
                                        props.genres.map(item => {
                                            return(
                                                <Chip className={styles.keywordChip} key={item} label={item} />
                                            )
                                        })
                                    }
                                    {props.genres.length === 0 &&
                                        <Typography>No genres provided</Typography>
                                    }                                    
                                </div>                    
                            </Grid>                            
                            <Grid item>
                                <Typography variant="h6" gutterBottom>
                                    Keywords
                                </Typography>
                                <div>
                                    {props.keywords.length > 0 &&
                                        props.keywords.map(item => {
                                            return(
                                                <Chip className={styles.keywordChip} key={item.id} label={item.name} />
                                            )
                                        })
                                    }
                                    {props.keywords.length === 0 &&
                                        <Typography>No keywords provided</Typography>
                                    }
                                </div>                    
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