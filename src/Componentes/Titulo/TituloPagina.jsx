import React from 'react';
import P from 'prop-types';
import { Typography } from '@material-ui/core';
//import useStyles from './style';

const TituloPagina = (props) => {
  //const classes = useStyles();
  return (
    <div>
      <Typography variant="h5" component="h1">
        {props.titulo}
      </Typography>
    </div>
  );
};

TituloPagina.propTypes = {
  titulo: P.any.isRequired,
};

export default TituloPagina;
