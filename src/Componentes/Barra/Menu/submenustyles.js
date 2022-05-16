import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  geral: {
    padding: 0,
  },

  icone: {
    //width: 180,
    color: theme.palette.secondary.dark,
    fontSize: 'large',
    marginLeft: 10,
  },

  Subicone: {
    alignItems: 'center',
    paddingLeft: 25,
    color: theme.palette.secondary.dark,
    fontSize: 'large',
  },

  label: {
    textDecoration: 'none',
    //marginLeft: '-10px',
    color: theme.palette.secondary.dark,
  },

  sidebar: {
    height: 45,
    backgroundColor: theme.palette.background.paper,

    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      cursor: 'pointer',
      color: theme.palette.common.white,
    },
    '&:hover .label': {
      color: theme.palette.common.white,
      textDecoration: 0,
    },
  },

  subar: {
    backgroundColor: theme.palette.grey[300],

    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      cursor: 'pointer',
    },
  },

  Sublabel: {
    textDecoration: 0,
    fontSize: 19,
    color: theme.palette.secondary.dark,
  },
}));
