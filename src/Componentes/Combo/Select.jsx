import { React } from 'react';
import { useField } from 'formik';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useStyles from './styles.js';
import P from 'prop-types';

export default function BasicSelect(props) {
  const classes = useStyles();
  const [field, meta] = useField(props);

  const { label } = props;
  const { definido } = props;
  const { dados } = props;
  const { handleChange } = props;
  const { display } = props;
  const { valor } = props;
  const { key } = props;

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          {...field}
          {...props}
          helperText={meta.error && meta.touched ? meta.error : ''}
          error={meta.error && meta.touched ? true : false}
          className={meta.error && meta.touched ? classes.option : classes.formControl}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={definido}
          label={label}
          onChange={handleChange}
        >
          {dados
            ? dados.map((dado) => {
                return (
                  <MenuItem className={classes.option} key={dado[key]} value={dado[valor]}>
                    {dado[display]}
                  </MenuItem>
                );
              })
            : ''}
        </Select>
      </FormControl>
    </Box>
  );
}

BasicSelect.propTypes = {
  dados: P.any.isRequired,
  handleChange: P.any.isRequired,
  display: P.any.isRequired,
  valor: P.any.isRequired,
  key: P.any.isRequired,
  definido: P.any.isRequired,
  label: P.any.isRequired,
};
