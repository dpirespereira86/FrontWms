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
  hiddem: {
    display: 'none',
  },
  itens: {
    maxHeight: 1,
    overflow: 'auto',
  },
  nitem: {
    margin: theme.spacing(1),
  },
}));

export default useStyles;
