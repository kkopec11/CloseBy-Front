import React, { useState, useEffect, useCallback } from "react";
import useStyles from './styles';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField, MenuItem, InputLabel } from '@material-ui/core';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@material-ui/core/IconButton';
import { useSelector } from "react-redux";
import Payment from '../../Payment/Payment';
import { ClosedCaptionSharp, SettingsPowerRounded } from "@material-ui/icons";
import { Link } from 'react-router-dom'

const PopupBuy = (props) => {
    const classes = useStyles();
    const { profile: currentProfile } = useSelector((state) => state.auth);
   
    const [quantity, setQuantity] = useState("");
    
    const [isOpen, setIsOpen] = useState(false);

    const [idEventBuy, setIdEventBuy] = useState();


    const onChangeQuantity = (e) => {
        const quantity = e.target.value;
        setQuantity(quantity);
    }

    const enabled = `${quantity}`.length > 0;

    return (
        <div className={classes.popupBox} >
            <Container className={classes.container} component="main" maxWidth="xs">
                <Paper className={classes.paper} elevation={3}>
                    <Grid className={classes.headerContainer} >
                        <Grid className={classes.closeIconContainer}>
                            <IconButton onClick={props.handleClose} aria-label="close" size="small">
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </Grid>
                        <Avatar className={classes.avatar}>
                            <ShoppingCartIcon />
                        </Avatar>
                    </Grid>
                    <Typography component="h1" variant="h5">
                        Buy ticket for this event?
                    </Typography>
                    <Grid container className={classes.containerData} spacing={2}>
                        <Grid item xs={12} >
                            <TextField value={props.handleData[1]} label="Title" InputProps={{ readOnly: true }} variant="outlined" fullWidth />
                        </Grid>       
                        <Grid item xs={12} >
                            <TextField value={props.handleData[2]} label="Description" InputProps={{ readOnly: true }} variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField value={props.handleData[3]} label="Price" InputProps={{ readOnly: true }} variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                                <TextField variant="outlined" label="Quantity" fullWidth name="quantity" htmlFor="quantity" value={quantity} select onChange={onChangeQuantity}>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                </TextField>
                            </Grid>
                        <Grid item xs={12}>            
                        <Typography component="h1" variant="h5">
                            Total amount: €{props.handleData[3] * quantity} 
                        </Typography>
                            <Button disabled={!enabled} onClick={() => {props.parentCallback(quantity)}} variant="contained" color="primary" fullWidth>
                                Buy
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    );
};

export default PopupBuy;