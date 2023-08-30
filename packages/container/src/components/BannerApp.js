import { mount } from 'banner/BannerApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, { 
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        // To stop infinite loop rename the pathname variable and compare it to the nextPathname variable
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          // Only if the pathname is different than the nextPathname we will navigate
          history.push(nextPathname);
        }        
      }
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
