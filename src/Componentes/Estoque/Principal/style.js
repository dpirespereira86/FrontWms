import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  estoque: {
    display: 'flex',
    flexWrap: 'nowrap',
    p: 1,
    m: 1,
    bgcolor: 'background.paper',
    sx: { maxWidth: 300 },
  },
  posicao: {
    display: 'flex',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    marginRight: 8,
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
    align: 'center',
  },
  vazio: {
    display: 'flex',
    color: theme.palette.grey[900],
    backgroundColor: theme.palette.grey[500],
    marginRight: 8,
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
    align: 'center',
  },
  rua: {
    margin: 10,
  },
  paper: {
    position: 'flex',
    height: 50,
    //backgroundColor: theme.palette.background.paper,
    //border: '0px solid ',
    //boxShadow: theme.shadows[1],
    padding: theme.spacing(2, 4, 3),
  },
  info: {
    position: 'flex',
    width: 100,
    backgroundColor: theme.palette.primary.ligth,
    //border: '2px solid #000',
    align: 'center',
    padding: theme.spacing(0, 3, 1),
    margin: 3,
  },

  ico: {
    marginBottom: -6,
    Color: theme.palette.primary.main,
    marginRight: 3,
  },

  nivel: {
    display: 'flex',
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    marginRight: 5,
    width: theme.spacing(3),
    height: theme.spacing(3),
    align: 'center',
  },

  ajustes: {
    marginTop: 3,
  },

  root: {
    flexGrow: 1,
  },
}));

export default useStyles;
