import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  lateral: {
    color: theme.palette.common.white,
  },
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginTop: 10,
  },
}));

export default useStyles;
