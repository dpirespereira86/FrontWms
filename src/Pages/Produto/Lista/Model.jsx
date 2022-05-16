import React from 'react';
import P from 'prop-types';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import TabPanel from '../../../Componentes/TabPanel/TabPanel';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Form from './Form/Form';
import Avatar from '@mui/material/Avatar';

export const Model = (dados) => {
  const theme = useTheme();
  const produto = Object.values(dados);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  function a11yProps(index: number) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Avatar alt="Remy Sharp" variant="square" src={produto[0].imageUrl} />

          <Typography id="modal-modal-title" variant="h6" component="h2">
            {produto[0].descricao}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {produto[0].id}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ width: '100%' }}>
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab label="Produto" {...a11yProps(0)} />
                <Tab label="Editar" {...a11yProps(1)} />
                <Tab label="Estoque" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <Form produto={produto[0]} />
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                Editar
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                Estoque
              </TabPanel>
            </SwipeableViews>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

Model.propTypes = {
  dados: P.any,
};
