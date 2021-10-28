import {Box, Text} from 'react-native-design-utility';
import React from 'react';

const SearchEmpty = () => {
  return (
    <Box f={1} center>
      <Text color="grey">No resultados, por favor haga alguna busca...</Text>
    </Box>
  );
};

export default SearchEmpty;