import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  topico: {
    backgroundColor: theme.palette.common.white,
    margin: theme.spacing(2),
    width: '100%',
    borderRadius: theme.spacing(0.5),
  },
  form: {
    padding: theme.spacing(1),
    display: 'flex',
    flexWrap: 'wrap',
    borderColor: theme.palette.primary.main,
    border: 1,
    borderTopColor: theme.palette.primary.main,
    borderTop: theme.spacing(10),
  },

  alert: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },

  inicio: {
    backgroundColor: theme.palette.primary.main,
  },

  controle: {
    padding: theme.spacing(1),
  },

  submit: {
    boxShadow: theme.shadows[10],
  },

  upload: {
    margin: '0px',
    '&.MuiButton-root': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      variant: 'text',
      margin: '0px',
    },

    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
    },
  },

  terceiro: {
    marginTop: theme.spacing(9),
  },

  gUpload: {
    backgroundColor: theme.palette.primary.secondary,
  },

  gDowload: {
    backgroundColor: theme.palette.primary.secondary,
  },

  dowload: {
    '&.MuiButton-root': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      variant: 'text',

      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
      },
    },
  },

  // labelInput: {
  //   color: theme.palette.primary.main,

  //   marginTop: theme.spacing(5),
  //   cursor: 'pointer',
  // },

  // input: {
  //   marginTop: theme.spacing(3),
  //   WebkitBoxSizing: 'border-box',
  //   color: theme.palette.primary.main,
  //   border: '1 solid',
  //   borderTopColor: theme.palette.primary.main,
  //   backgroundColor: theme.palette.secondary.main,
  //   width: '100%',

  //   '&::-webkit-file-upload-button': {
  //     backgroundColor: theme.palette.primary.main,
  //     color: theme.palette.common.white,
  //     borderRadius: theme.spacing(0.5),
  //     padding: theme.spacing(1),
  //     border: 'none',
  //     shadows: theme.shadows[10],
  //     content: 'Upload',
  //     whiteSpace: 'nowrap',

  //     '&:hover': {
  //       cursor: 'pointer',
  //       backgroundColor: theme.palette.secondary.main,
  //     },
  //   },
  // },
  inputPersonalizado: {},
  botaoSelecionar: {
    color: theme.palette.secondary.main,
    shadows: theme.shadows[10],
    cursor: 'pointer',
    '&:hover': { color: theme.palette.primary.main },
  },
  imagem: {
    maxWidth: '200px',
    maxHeight: '200px',
    shadows: theme.shadows[100],
  },
  inputFile: {
    display: 'none',
  },
  span: {
    color: theme.palette.primary.main,
    cursor: 'pointer',
  },

  btnInvisivel: {
    display: 'none',
  },
  // Modal upload
  paper: {
    position: 'absolute',
    width: 'auto',
    maxWidth: '1200px',
    backgroundColor: theme.palette.background.paper,
    border: '0px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: theme.spacing(2, 2, 2, 2),
  },

  tableHead: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    textAlign: 'center',
  },

  lineError: {
    backgroundColor: theme.palette.secondary.main,
  },

  diverClose: {
    display: 'none',
  },
}));
