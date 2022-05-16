import { Divider } from '@material-ui/core';
import { React, useState } from 'react';
import TituloPagina from '../../Componentes/Titulo/TituloPagina';
import useStyles from './style';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
//import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CadastroEstoque from './CadastroEstoque/CadastroEstoque';
import { Tooltip } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const Configuracao = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //TODO:Ajustar o campo Ordem da tabela de posição que não está aparecendo
  return (
    <div>
      <TituloPagina titulo={'Configurações'} />
      <Divider />
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="off"
            aria-label="scrollable prevent tabs example"
          >
            <Tab
              icon={
                <Tooltip title="Estoque">
                  <Inventory2Icon />
                </Tooltip>
              }
              aria-label="phone"
              {...a11yProps(0)}
            >
              {'xxxxx '}
              xxxx
            </Tab>
            <Tab icon={<FavoriteIcon />} aria-label="favorite" {...a11yProps(1)} />
            <Tab icon={<PersonPinIcon />} aria-label="person" {...a11yProps(2)} />
            <Tab icon={<HelpIcon />} aria-label="help" {...a11yProps(3)} />
            <Tab icon={<ShoppingBasket />} aria-label="shopping" {...a11yProps(4)} />
            <Tab icon={<ThumbDown />} aria-label="up" {...a11yProps(5)} />
            <Tab icon={<ThumbUp />} aria-label="down" {...a11yProps(6)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <CadastroEstoque />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </div>
    </div>
  );
};

export default Configuracao;
