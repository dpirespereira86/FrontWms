import { /*alpha*/ makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  titleCol: {
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.secondary.main,
    borderBottom: 'solid',
    textAlign: 'left',
    fontSize: '15px',
    fontWeight: 'bold',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  linha: {
    textAlign: 'left',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    fontSize: '15px',
    /*fontWeight: 'bold',*/
    '&: hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  edite: {
    color: theme.palette.primary.main,
  },
  apaga: {
    color: theme.palette.error.main,
  },
  icon: {
    '&:hover': {
      backgroundColor: theme.palette.grey[100],
    },
  },
  indice: {
    color: theme.palette.secondary.main,
  },
}));
