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
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import { useTheme, createStyles, 
    makeStyles, 
    Theme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';


const useItemDialogStyles = makeStyles((theme: Theme) => 
    createStyles({
        firstColumn: {
            marginRight: '0.900rem',
            width: '13rem'
        },
        secondColumn: {
            width: '20rem',
            marginRight: '0.700rem'
        },
        thirdColumn: {
            width: '20rem',
        },
        chip: {
            margin: '0.200rem',
        },
        genreChip:{
            backgroundColor: 'powderblue'
        },
        keyWordChip: {
            backgroundColor: 'royalblue',
            color: 'white'
        },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
        dialogActions: {
            justifyContent: 'space-between'
        }   
    })
);


const ItemDetailDialog = (props: ItemDetailDialogProps) => {
    const imageUrl = props.dialogItem && props.dialogItem.posterPath 
                        ? `${props.baseImageUrl}${props.dialogItem?.posterPath}`
                        : defaultImage;
    const styles = useItemDialogStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            maxWidth="md"
            fullWidth={fullScreen}
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
                    <Grid container direction='column' className={styles.secondColumn} >
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
                    </Grid>
                    <Grid container direction='column' className={styles.thirdColumn}>
                        <Grid item>
                            <Typography variant="h6" gutterBottom>
                                Genres
                            </Typography>
                            <div>
                                {props.genres.length > 0 &&
                                    props.genres.map(item => {
                                        return(
                                            <Chip className={`${styles.chip} ${styles.genreChip}`} key={item} label={item} />
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
                                            <Chip className={`${styles.chip} ${styles.keyWordChip}`} key={item.id} label={item.name} />
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
            </DialogContent>
            <DialogActions className={styles.dialogActions}>
                <Grid container direction='column'>
                    <Grid item>
                        <Box component="fieldset" mb={3} borderColor="transparent">
                            <Typography component="legend">Vote average</Typography>
                            <Rating
                                name="vote-average"
                                value={props.dialogItem && props.dialogItem.voteAverage}
                                max={10}
                                precision={0.25}
                            />
                        </Box>
                    </Grid>
                    {props.type === 'Movies' &&
                        <Grid item>
                            <Box component="fieldset" mb={3} borderColor="transparent">
                                <Typography component="legend">Your rating</Typography>
                                <Rating
                                    name="your-rating"
                                    value={props.ratingValue}
                                    max={10}
                                    precision={0.25}
                                    onChange={props.onChangeRating}
                                />
                                <Typography component="span">{props.ratingMessage && props.ratingMessage}</Typography>
                            </Box>
                        </Grid>
                    }
                </Grid>
                <Button onClick={props.onClickDialogOk} color="primary">
                Ok
                </Button>
            </DialogActions>
        </Dialog>  
    );
}

export default ItemDetailDialog;