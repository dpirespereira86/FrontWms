import React from 'react';
import HorizontalLinearStepper from '../../../Componentes/Stepper/Stepper';
import TabPanel from '../../../Componentes/TabPanel/TabPanel';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import ConferenciaCega from './ConferenciaCega';
import NewLote from './NewLote';
import Tag from './Tag';

const Corpo = () => {
  const steps = ['Conferência Cega', 'Criar Lote', 'Gerar Etiqueta'];

  const [value, setValue] = React.useState(0);
  const [invalido, setInvalido] = React.useState(-1);
  const [stepsN, setSteps] = React.useState(0);
  const [msg, setMsg] = React.useState('');
  const [Produto, setProduto] = React.useState([]);
  const [Pedido, setPedido] = React.useState('');
  const [lote, setLote] = React.useState([]);

  // const handleChange = (event, newValue) => {
  //   console.log(newValue);
  //   setValue(newValue);
  // };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <Grid container sx={{ marginTop: 5 }} spacing={1} direction="row">
      <Grid item xs={3} />
      <Grid item sx={{ width: '100%' }} xs={6}>
        <HorizontalLinearStepper steps={steps} msg={msg} stepsN={stepsN} invalido={invalido} />
      </Grid>
      <Grid item xs={3} />
      <Grid item xs={12}>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} aria-label="basic tabs example">
              <Tab label="" {...a11yProps(0)} />
              <Tab label="" {...a11yProps(1)} />
              <Tab label="" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <ConferenciaCega
              valor={setValue}
              setProduto={setProduto}
              Produto={Produto}
              setMsg={setMsg}
              setSteps={setSteps}
              invalido={setInvalido}
              setPedido={setPedido}
              Pedido={Pedido}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <NewLote
              nPedido={Pedido}
              lote={lote}
              setSteps={setSteps}
              invalido={setInvalido}
              valor={setValue}
              setLote={setLote}
              Produto={Produto}
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Tag lote={lote} />
          </TabPanel>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Corpo;
