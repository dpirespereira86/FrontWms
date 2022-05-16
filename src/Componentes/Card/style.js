import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {},
  icone: {
    zIndex: theme.zIndex.tooltip,
    margin: 0,
  },
  titulo: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.secondary.dark,
  },
  valor: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.secondary.main,
    fontVariant: theme.typography.h6,
  },
  contValor: {},
}));

export default useStyles;
