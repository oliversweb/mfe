import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const url = "http://localhost:9001/footer"
const getData = async () => {
    let content = null;
    try {
        const res = await fetch(url);
        const response = await res.json();
        console.log(`Loaded footer content for local`, response);
        content = response;
    } catch (error) {
        throw new Error(`Unable to fetch footer content ${error.message}`, error);
    }

    return content;
};

// Mount function to start up the app
const mount = async (el) => {
  const footerContent = await getData();
  
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
