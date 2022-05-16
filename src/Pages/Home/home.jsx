import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MiniDrawer from '../../Componentes/Barra/AppBar';
import SignInSide from '../Login/login';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: '',
  },
  barra: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#faf',
    elevation: 0,
  },
  superior: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#faf',
    autoPageSize: true,
    boxShadow: 'none',
    heigth: '50%',
  },
}));

function Home() {
  const classes = useStyles();
  const token = localStorage.getItem('token');

  //window.location.reload();

  if (token === null) {
    return (
      <div className={classes.root}>
        <SignInSide />
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <MiniDrawer />
      </div>
    );
  }
}
export default Home;
