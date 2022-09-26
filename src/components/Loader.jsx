import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';

const Loader = ({color}) =>  (
  <Box minHeight="95vh">
    <Stack direction='row' justifyContent='center' alignItems='center' height='80vh' >
      <CircularProgress color={color? color:"error"}/>
    </Stack>
  </Box>
);

export default Loader;