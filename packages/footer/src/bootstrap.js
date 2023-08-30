import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CONTENT_URL } from '../constants';

const getData = async () => {
    console.log(`Enviroment [${process.env.NODE_ENV}] Content url [${CONTENT_URL}]`);
    let content = null; 
    try {      
      let res = await fetch(CONTENT_URL);        
      content = await res.json();
      console.log(`Loaded remote footer content`, content);
    } catch (error) {
      throw new Error(`Unable to fetch footer content ${error.message}`, error);
    }

    return content;
};

// Mount function to start up the app
const mount = async (el) => {
  const footerContent = await getData();
  console.log('Footer content: ', footerContent);
  ReactDOM.render(<App data={footerContent} />, el);
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_footer-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// and we should export the mount function
export { mount };
