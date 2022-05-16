import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  table: {
    maxHeigth: theme.spacing(50),
  },
  itens: {
    width: '100%',
    height: '50%',
    paddingBottom: '30%',
    margin: '0 auto',
    overFlow: 'auto',
    position: 'relative',
  },
  cab: {
    width: '50%',
  },
  linha: {
    width: '50%',
  },
}));

export default useStyles;
