import React, { useState, useEffect } from "react";
import useStyles from './styles';
import Event from '../../../../../Services/Profiles/event.service'
import { Avatar, Button, Paper, Grid, Typography, Container, Select, TextField, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { editEvent } from "../../../../../Actions/Profiles/events";
import { Alert, AlertTitle } from '@material-ui/lab';
import { useDispatch, useSelector } from "react-redux";
import MapDetailsView from '../../../../Map/DetailsMap/View/DetailsViewMap'
import EventIcon from '@mui/icons-material/Event';
import EventTypes from '../../../../../Static/select'
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import { styled } from '@mui/material/styles';
import { registerEventDispatch } from "../../../../../Actions/Profiles/events";
import CompWorker from '../../../../../Services/Profiles/companyWorker.service'
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import moment from 'moment'
import { setNewEventLoc } from "../../../../../Actions/Profiles/events";
import { setCurrentEventLoc, getEventIdDispatch, addToFavoriteDispatch, deleteFromFavoriteDispatch } from "../../../../../Actions/Profiles/events";
import { useHistory } from "react-router-dom";
import { createPayment } from "../../../../../Services/Payment/payment.service";
import Message from '../../../../Message/Message';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarIcon from '@mui/icons-material/Star';
import IconButton from '@mui/material/IconButton';
import { amber } from '@mui/material/colors';

const Input = styled(MuiInput)`
  width: 42px;
`;

const EventDetailsView = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { event: currentEvent } = useSelector((state) => state.event);
    const { profile: currentProfile } = useSelector((state) => state.auth);

    const [eventId, setEventId] = useState(currentEvent.id);
    const [title, setTitle] = useState(currentEvent.title);
    const [desc, setDesc] = useState(currentEvent.description);
    const [type, setType] = useState(currentEvent.type);
    // const [status, setStatus] = useState(currentEvent.status);
    const [limit, setLimit] = useState(currentEvent.ticketLimit);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [favorite, setFavorite] = useState("");

    const changeFavorite = () => {
        if (favorite) {
            dispatch(deleteFromFavoriteDispatch(currentProfile.id, currentEvent.id))
                .then((response) => {
                    setFavorite(false);
                })
                .catch((e) => {
                    console.log(e);
                });
        } else {
            dispatch(addToFavoriteDispatch(currentProfile.id, currentEvent.id))
                .then((response) => {
                    setFavorite(true);
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    };

    const getEventDetails = () => {
        dispatch(getEventIdDispatch(eventId, currentProfile.id))
            .then((response) => {
                const event = response.data;
                setFavorite(event.isLiked);
                // setTitle(event.title);
                // setDesc(event.description);
                setStartDate(moment(event.startDateTime).format('MM/DD/YYYY - HH:mm'));
                setEndDate(moment(event.endDateTime).format('MM/DD/YYYY - HH:mm'));
                // setType(event.type);
                // setStatus(event.status);
                // setLimit(event.ticketLimit);
            })
            .catch((e) => {
                console.log(e);
            });
    }
    useEffect(getEventDetails, []);

    let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }

    return (
        <Container className={classes.container} component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Grid container className={classes.titleContainer} >
                    <Grid container className={classes.favoriteContainer} >
                        <IconButton onClick={changeFavorite}>
                            {
                                favorite ?
                                    (<StarIcon fontSize="large" sx={{ color: amber[500], fontSize: 60 }} />)
                                    :
                                    (<StarBorderOutlinedIcon fontSize="large" sx={{ color: amber[500], fontSize: 60 }} />)
                            }
                        </IconButton>
                    </Grid>
                    <Grid className={classes.topContainer} >
                        <Avatar className={classes.avatar}>
                            <EventIcon fontSize="large" />
                        </Avatar>

                    </Grid>
                    <Typography className={classes.title} component="h1" variant="h4">Event {title}</Typography>
                </Grid>
                <form >
                    <Grid container className={classes.formContainer}>
                        <Grid className={classes.fieldsContainer} >
                            <Grid className={classes.gridField} >
                                <TextField value={title} label="Title" InputProps={{ readOnly: true }} variant="outlined" fullWidth />
                            </Grid>
                            <Grid className={classes.gridField} >
                                <TextField label="Type" variant="outlined" fullWidth value={type} type="text" InputProps={{ readOnly: true }} />
                            </Grid>
                            <Grid className={classes.gridField} >
                                <TextField label="Start Date and Hour" value={startDate} InputProps={{ readOnly: true }} fullWidth />
                            </Grid>
                            <Grid className={classes.gridField} >
                                <TextField label="End Date and Hour" value={endDate} InputProps={{ readOnly: true }} fullWidth />
                            </Grid>
                            <Grid className={classes.gridField} >
                                <Typography id="input-slider" gutterBottom>
                                    Tickets left
                                </Typography>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs>
                                        <Slider className={classes.limit} value={limit} />
                                    </Grid>
                                    <Grid item>
                                        <Input value={limit} size="small" />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid className={classes.gridField}>
                                <TextField label="Description" rows={6} multiline fullWidth name="desc" htmlFor="desc" variant="outlined" type="text" value={desc} InputProps={{ readOnly: true }} />
                            </Grid>
                            {/* <Grid item xs={12} >
                            <TextField value={status} label="Status" InputProps={{ readOnly: true }} name="status" htmlFor="status" variant="outlined" fullWidth />
                        </Grid> */}
                        </Grid>
                        <Grid className={classes.mapContainer}  >
                            <MapDetailsView currentEventId={[eventId]} />
                        </Grid>
                    </Grid>
                    <Grid container className={classes.buttonsContainer}>
                        <Grid item className={classes.buttonClose}>
                            <Button onClick={goToPreviousPath} fullWidth variant="contained" color="secondary" >
                                back
                            </Button>
                        </Grid>
                        <Grid item className={classes.buttonSubmit}>
                            <Button component={Link} to={`/create-payment/${eventId}`} className={classes.buttonEditSave} fullWidth variant="contained"  >
                                Buy ticket
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default EventDetailsView;


