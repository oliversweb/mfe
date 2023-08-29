import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  // If we are running in isolation/localhost we will use the browser history provided otherwise we will create a new memory history with an initial path
  const history = defaultHistory || createMemoryHistory( {
    initialEntries: [initialPath],
  });

  if (onNavigate) {
    history.listen(onNavigate); 
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname}) {      
      // To stop infinite loop rename the pathname variable and compare it to the nextPathname variable
      const { pathname } = history.location;
      if ( pathname !== nextPathname ) {
        // Only if the pathname is different than the nextPathname we will navigate
        history.push(nextPathname);
      }
    }
  };
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// We are running through container
// and we should export the mount function
export { mount };
