import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  superior: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: theme.palette.common.white,
    backgroundColor: '#1e88e5',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),
    marginTop: theme.spacing(3),
    zIndex: theme.zIndex.speedDial,
    boxShadow: theme.shadows[10],
    position: 'none',
    width: '100%',
  },
  inferior: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),
    marginTop: theme.spacing(-1),
    width: '98%',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(3),
    zIndex: theme.zIndex.mobileStepper,
    boxShadow: theme.shadows[10],
    position: 'none',
  },
}));

export default useStyles;
