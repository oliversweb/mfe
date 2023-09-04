import React from 'react';

export default ({ data }) => {
  console.log('Banner data: ', data);
  let banner = ""
  data.sections.map((item) => (
    banner = `${banner} - ${item.name}`
  ))

  return (
    <React.Fragment>
      <>______________ MFE REACT Banner ______________</>
      <div>{banner}</div>
      <>______________________________________________</>
    </React.Fragment>
  );
};
