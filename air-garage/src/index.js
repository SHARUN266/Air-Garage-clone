import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from './Context/AppContext';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    offset: 200,
    delay: 50,
    once: false
});

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme=extendTheme({
  colors:{
     bg:"#fec",
     color:"#fa824c",
     text:"#a1a6af"

  }
})
root.render(
  <React.StrictMode>
    <AppContextProvider>
    <ChakraProvider  theme={theme}>
      <BrowserRouter>
    
    <App />
    </BrowserRouter>
    </ChakraProvider>
    </AppContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
