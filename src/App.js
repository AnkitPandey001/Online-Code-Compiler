import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import CodeEditor from './components/CodeEditor';

const App = () => {
  return (
    <Box bg="#1a202c" color='white' px={4} py={6} >
      <Text
        fontSize="4xl"         
        fontWeight="bold"                         
        textAlign="center"      
        color="teal.300"   
        
      >
        CodeStream
      </Text>
      <CodeEditor />
    </Box>
  );
};

export default App;
