import React from 'react';
import Grid from '@mui/material/Grid';
import P from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
//import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TagLote from '../../../Componentes/Etiqueta/Lote/TagLote';

const Tag = (props) => {
  const [value, setValue] = React.useState('');

  const { lote } = props;
  console.log(lote);
  console.log(value);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  function printDiv(divID) {
    var conteudo = document.getElementById(divID).innerHTML;
    var win = window.open();
    win.document.write(conteudo);
    win.print();
    win.close(); //Fecha após a impressão.
  }

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={7}>
          <Box sx={{ maxHeight: '30vh', overflow: 'auto' }}>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Todos"
                  control={<Radio />}
                  label={
                    <Typography variant="subtitle2" color="primary">
                      Todos
                    </Typography>
                  }
                />
                {lote.map((p) => {
                  return (
                    <FormControlLabel
                      key={p.id}
                      value={p.id}
                      label={
                        <Typography variant="subtitle2" color="primary">
                          {'Lote ' + p.id}
                        </Typography>
                      }
                      control={<Radio />}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <React.Fragment>
            <CssBaseline />
            <Container fixed>
              <Box id={'imp'} sx={{ bgcolor: '#cfe8fc', height: '30vh', overflow: 'auto', position: 'relative' }}>
                <TagLote />
              </Box>
            </Container>
          </React.Fragment>
          <Button variant="outlined" color="primary" onClick={() => printDiv('imp')}>
            imprimir
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Tag.propTypes = {
  lote: P.array.isRequired,
};

export default Tag;
