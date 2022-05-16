import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  titulo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: theme.palette.primary.main,
    //margin: theme.spacing(2),
  },
}));

export default useStyles;
