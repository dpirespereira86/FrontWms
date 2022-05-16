import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  table: {
    border: 1,
    borderBlock: 1,
  },
  card: {
    minWidth: 275,
  },
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
    color: theme.palette.getContrastText('#faf'),
    backgroundColor: '#3c5',
    margin: 2,
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  vazio: {
    backgroundColor: '#faf',
    margin: 2,
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  rua: {
    margin: 10,
  },
}));

export default useStyles;
