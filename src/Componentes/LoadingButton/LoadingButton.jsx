import React from 'react';
//import P from 'prop-types';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import SaveIcon from '@mui/icons-material/Save';

const LoadingButtons = () => {
  const [loading, setLoading] = React.useState(true);
  function handleClick() {
    setLoading(true);
  }
  return (
    <Box>
      <Box sx={{ '& > button': { m: 1 } }}>
        <LoadingButton
          color="secondary"
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          Save
        </LoadingButton>
      </Box>
    </Box>
  );
};

LoadingButtons.propTypes = {};

export default LoadingButtons;
