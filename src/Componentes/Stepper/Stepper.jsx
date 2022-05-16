import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import P from 'prop-types';

export default function HorizontalStepperWithError(props) {
  const { steps } = props;
  const { stepsN } = props;
  const { invalido } = props;
  const { msg } = props;

  const isStepFailed = (step) => {
    return step === invalido;
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={stepsN}>
        {steps.map((label, index) => {
          const labelProps = {};
          if (isStepFailed(index)) {
            labelProps.optional = (
              <Typography variant="caption" color="error">
                {msg}
              </Typography>
            );

            labelProps.error = true;
          }

          return (
            <Step key={label}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}

HorizontalStepperWithError.propTypes = {
  steps: P.any.isRequired,
  invalido: P.any.isRequired,
  stepsN: P.any.isRequired,
  msg: P.any.isRequired,
};
