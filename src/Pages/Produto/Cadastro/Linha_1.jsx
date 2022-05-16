import { React } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './style';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const Linha_1 = (props) => {
  const classes = useStyles();
  const previewImg = document.getElementById('imagem');

  const { setImage } = props;

  return (
    <Grid container direction="row" spacing={1}>
      <Grid item xs={2}>
        <label className={classes.inputPersonalizado}>
          <IconButton aria-label="upload picture" component="span">
            <PhotoCamera className={classes.botaoSelecionar} />
          </IconButton>
          <span className={classes.span}>Selecione uma imagem</span>
          <img id="imagem" className={classes.imagem} />
          <input
            type="file"
            className={classes.inputFile}
            accept="image/*"
            onChange={(e) => {
              const fileToUpload = e.target.files.item(0);
              setImage(fileToUpload);
              const reader = new FileReader();
              reader.onload = (e) => (previewImg.src = e.target.result);
              reader.readAsDataURL(fileToUpload);
            }}
          />
        </label>
      </Grid>
    </Grid>
  );
};

Linha_1.propTypes = {
  props: PropTypes.any,
  setImage: PropTypes.func,
  setOpen: PropTypes.func,
  image: PropTypes.func,
};

export default Linha_1;
