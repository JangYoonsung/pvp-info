'use client';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

const Provider: React.FC<Readonly<{ children: React.ReactNode }>> = ({ children }) => {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
};

export default Provider;
