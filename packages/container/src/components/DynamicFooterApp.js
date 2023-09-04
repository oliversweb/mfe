import { mount } from 'dynamicfooter/DynamicFooterApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(async () => {
    await mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
