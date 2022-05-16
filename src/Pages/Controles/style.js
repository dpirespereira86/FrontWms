import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icone: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.dark,
    zIndex: 2,
    marginTop: 20,
    marginLeft: 15,
    fontSize: 60,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
  },

  cards: {
    marginRight: 20,
  },
}));

export default useStyles;
