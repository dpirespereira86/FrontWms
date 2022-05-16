import { Divider, Typography } from '@material-ui/core';
import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import AcUnitIcon from '@material-ui/icons/AcUnit';
import CardContent from '@material-ui/core/CardContent';
import P from 'prop-types';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    //textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.paper,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
    width: 200,
    height: 95,
    marginTop: -55,
    flexGrow: 1,
    borderRadius: 3,
  },

  texto: {
    color: theme.palette.primary.ligth,
    fontSize: 15,
    marginLeft: 80,
    zIndex: 3,
  },
  valor: {
    color: theme.palette.primary.dark,
    fontSize: 40,
    marginTop: -5,
    marginLeft: 80,
  },
  card: {
    flexGrow: 1,
    marginTop: -10,
  },
}));

export const CardKpi = (props) => {
  const classes = useStyles();

  const { numero, titulo, info } = props;
  return (
    <div>
      <CardContent className={classes.paper}>
        <div className={classes.card}>
          <Typography className={classes.texto} variant="h6" component="h6">
            {titulo}
          </Typography>
          <Typography className={classes.valor} variant="h4" component="h5">
            {numero}
          </Typography>
        </div>
        <Divider />
        {info}
      </CardContent>
    </div>
  );
};

CardKpi.propTypes = {
  numero: P.string.isRequired,
  titulo: P.string.isRequired,
  info: P.string.isRequired,
};
