import { mount } from 'footer/FooterApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(async () => {
    await mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
