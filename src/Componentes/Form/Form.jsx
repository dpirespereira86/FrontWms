import React from 'react';
import P from 'prop-types';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Formik } from 'formik';
import { Grid } from '@material-ui/core';
import { useStyles } from './style';

const Form = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Box>
        <Formik
          initialValues={props.initialValues}
          validationSchema={props.validationSchema ? props.validationSchema : ''}
          onSubmit={(values) => {
            props.salvar(values);
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit} className={classes.form}>
              {props.campos ? props.campos : ''}
              <Grid container className={classes.terceiro} direction="row" spacing={1}>
                <Grid className={classes.gSalvar} item xs={1}>
                  <Button type="submit" variant="contained" color="primary" className={classes.submit}>
                    {' '}
                    Salvar
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

Form.propTypes = {
  props: P.any,
  campos: P.any.isRequired,
  initialValues: P.any.isRequired,
  validationSchema: P.any.isRequired,
  salvar: P.func.isRequired,
  handleSubmit: P.func.isRequired,
};

export default Form;
