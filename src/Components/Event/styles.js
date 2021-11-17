import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        padding: theme.spacing(1, 0, 8),
        color: "#FFFFFF"
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%'  //16:9
    },
    cardContent: {
        flexGrow: 1,
    }
}));