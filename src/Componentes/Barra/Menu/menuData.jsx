import React from 'react';
import DepartureBoardIcon from '@material-ui/icons/DepartureBoard';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import FactoryIcon from '@mui/icons-material/Factory';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
//import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import MovingIcon from '@mui/icons-material/Moving';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MoveUpIcon from '@mui/icons-material/MoveUp';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <DepartureBoardIcon />,
    iconClosed: <KeyboardArrowDownSharpIcon />,
    iconOpened: <KeyboardArrowUpSharpIcon />,
  },
  {
    title: 'Produtos',
    path: '',
    icon: <QrCode2Icon />,
    iconClosed: <KeyboardArrowDownSharpIcon />,
    iconOpened: <KeyboardArrowUpSharpIcon />,

    subNav: [
      {
        title: 'Cadastro',
        path: '/produtos/cadastro',
        icon: <AppRegistrationIcon />,
        cName: 'sub-nav',
      },
      {
        title: 'Pesquisa',
        path: '/produtos/pesquisa',
        icon: '',
        cName: 'sub-nav',
      },
    ],
  },
  {
    title: 'Fornecedores',
    path: '/provider',
    icon: <FactoryIcon />,
    iconClosed: <KeyboardArrowDownSharpIcon />,
    iconOpened: <KeyboardArrowUpSharpIcon />,

    subNav: [
      {
        title: 'Cadastro',
        path: '/fornecedor/cadastro',
        icon: <AppRegistrationIcon />,
        cName: 'sub-nav',
      },
      {
        title: 'Pesquisa',
        path: '/fornecedor/pesquisa',
        icon: <ScreenSearchDesktopIcon />,
        cName: 'sub-nav',
      },
    ],
  },
  {
    title: 'Compra',
    path: '/compra',
    icon: <ShoppingBasketIcon />,

    iconClosed: <KeyboardArrowDownSharpIcon />,
    iconOpened: <KeyboardArrowUpSharpIcon />,

    subNav: [
      {
        title: 'Pedido',
        path: '/compra/pedido',
        icon: <AddTaskIcon />,
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: '',
      },
    ],
  },
  {
    title: 'Movimentacão',
    path: '/movimentacao',
    icon: <MovingIcon />,

    iconClosed: <KeyboardArrowDownSharpIcon />,
    iconOpened: <KeyboardArrowUpSharpIcon />,

    subNav: [
      {
        title: 'Entrada',
        path: '/movimentacao/entrada',
        icon: <LoginIcon />,
      },
      {
        title: 'Transferência',
        path: '/movimentacao/transferencia',
        icon: <MoveUpIcon />,
      },
      {
        title: 'Saida',
        path: '/movimentacao/saida',
        icon: <LogoutIcon />,
      },
    ],
  },

  {
    title: 'Support',
    path: '/support',
    icon: '',
  },
];
