import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const UK_FOOTER_CONTENT_URL = 'https://mfe-component.s3.eu-west-1.amazonaws.com/uk-footer.json';

const getData = async () => {
  let content = null; 
  try {      
    let res = await fetch(UK_FOOTER_CONTENT_URL);        
    content = await res.json();
  } catch (error) {
    throw new Error(`Unable to fetch banner content ${error.message}`, error);
  }

  return content;
};

// Mount function to start up the app
const mount = async (el) => {
  const data = await getData();
  console.log('Banner content: ', data);
  
  ReactDOM.render(<App data={data} />, el);
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_nextbanner-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// and we should export the mount function
export { mount };
