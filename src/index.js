import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { Pages } from './pages/index.js'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ChakraProvider  >
      <Pages />
    </ChakraProvider>
  </React.StrictMode>
)


