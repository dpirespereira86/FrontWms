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
  adiciona: {
    boxShadow: 'none',
    marginTop: theme.spacing(2),
  },
  summary: {
    boxShadow: 'none',
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.error.dark,
  },
  submit: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    color: theme.palette.primary.dark,
    backgroundColor: '#ffa726',
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.secondary.dark,
    },
  },
}));

export default useStyles;
