import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
  },
  appBar: {
    backgroundColor: theme.palette.primary.main,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    backgroundColor: theme.palette.primary.main,
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    backgroundColor: '#E6E6FA',
  },
  logo: {
    flexGrow: 1,
    width: 50,
    margin: 0,
  },
  avatar: {
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.background.paper,
  },
  box: { flexGrow: 1 },
  usuario: {
    marginLeft: 10,
    marginTop: 0,
    marginRight: 10,
  },
  saud: {
    marginTop: 0,
    marginLeft: 10,
    marginBottom: 0,
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: '#E6E6FA',
    zIndex: -1,
  },
  openicon: {
    marginRight: 0,
    zIndex: 2,
    color: theme.palette.background.paper,
  },
  titulopaper: {
    color: theme.palette.primary.dark,
    fontSize: 15,
  },
  emailpaper: {
    color: theme.palette.text.main,
    fontSize: 13,
    padding: 0,
    margin: 0,
  },
  loginpaper: {
    color: theme.palette.text.secondary,
    fontSize: 13,
    padding: 0,
    margin: 0,
    marginBottom: 5,
  },
  iconsair: {
    color: theme.palette.secondary.dark,
    marginTop: 5,
    padding: 0,
  },
  iconconfig: {
    color: theme.palette.primary.dark,
    marginTop: 5,
    padding: 0,
  },
  justo: {
    color: theme.palette.primary.dark,
    marginTop: 5,
    marginBottom: 5,
  },
  lmenusair: {
    display: 'flex',
    position: 'center',
    padding: 0,
    marginTop: 3,
  },
  button: {
    padding: 0,
    backgroundColor: theme.palette.background.paper,
    marginTop: 7,
    marginLeft: 3,
    marginRight: 30,
    marginBottom: 0,
    color: theme.palette.secondary.ligth,
    display: 'flex',
  },
  menu: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
