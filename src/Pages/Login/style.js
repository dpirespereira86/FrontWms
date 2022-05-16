import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: theme.palette.primary.main,
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  resposta: {
    color: '#B22222',
    fontSize: 22,
  },
  vetor: {
    width: '90%',
    marginTop: '-20%',
    marginLeft: '5%',
    zIndex: theme.zIndex.modal,
  },
  welcome: {
    writingMode: 'vertical-lr',
    fontFamily: 'Roboto',
    fontSize: '65px',
    paddingTop: '5%',
    paddingLeft: '2%',
    color: theme.palette.secondary.main,
  },
  linha: {
    borderColor: theme.palette.secondary.main,
    width: '90%',
    marginTop: '-3.8%',
  },
  alert: {
    width: '100%',
  },
}));
