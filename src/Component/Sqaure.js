import { Box, Button } from '@chakra-ui/react';
import React from 'react';

const Sqaure = ({ value, handleClick }) => {
  return (
    <Box>
      <Button h='30px' w='30px' backgroundColor='gray' onClick={handleClick}>
        {value}
      </Button>
    </Box>
  );
};

export default Sqaure;
