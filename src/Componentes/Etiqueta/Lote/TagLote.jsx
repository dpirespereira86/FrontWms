import React from 'react';
import P from 'prop-types';
import logo from '../../../image/2D Projetos_lbranca.png';
import Barcode from 'react-jsbarcode';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const TagLote = (props) => {
  const { value } = props;
  return (
    <Box
      sx={{
        bgcolor: '#fafafa',
        height: '27vh',
        width: '29.8vw',
        position: 'absolute',
        top: '5%',
        left: '3%',
        border: '3px solid black',
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <img
            style={{ width: '5vw', margin: '10px', border: '1px solid black', height: '6vh' }}
            src={logo}
            alt={'2D'}
          />
        </Grid>
        <Grid sx={{ margin: '5px 0px 0px 18px' }} item xs={3}>
          <Typography variant="h6" color="primary">
            Nº Lote:
          </Typography>
          <Typography variant="subtitle2" color="primary">
            Data Criação:
          </Typography>
        </Grid>
        <Grid sx={{ margin: '5px 0px 0px 0px' }} item xs={3}>
          <Typography variant="h6" color="primary">
            01
          </Typography>
          <Typography variant="subtitle2" color="primary">
            13/05/2022
          </Typography>
        </Grid>
        <Grid sx={{ margin: '0px 0px 0px 5px' }} item xs={5}></Grid>
        <Grid sx={{ margin: '5px 0px 0px -50px' }} item xs={4}></Grid>
        <Grid sx={{ margin: '-5px 10px 10px 50px', width: '30vw', height: '5vh' }} item xs={5}>
          <Barcode value={value} options={{ format: 'code128' }} renderer="svg" />
        </Grid>
      </Grid>
    </Box>
  );
};

TagLote.propTypes = {
  value: P.any.isRequired,
};

export default TagLote;
