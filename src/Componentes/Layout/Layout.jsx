import { Box, Grid } from '@material-ui/core';
import { React } from 'react';
import TituloPagina from '../Titulo/TituloPagina';
import useStyles from './style';
import P from 'prop-types';

const Layout = ({ corpo, ...props }) => {
  const classes = useStyles();

  console.log();
  return (
    <div>
      <Grid container direction="row" xs={12}>
        <Box className={classes.superior}>
          <TituloPagina titulo={props.titulo} />
        </Box>
        <Box className={classes.inferior}>{corpo}</Box>
      </Grid>
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  corpo: P.func.isRequired,
  titulo: P.string.isRequired,
};
