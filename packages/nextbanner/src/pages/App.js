import React from 'react';

export default ({ data }) => {
  console.log('Banner data: ', data);
  let banner = "";

  data.sections.map((item) => (
    banner = `${banner} - ${item.name}`
  ))

  if (!data) {
    return (
      <React.Fragment>
        <div>_______________ MFE NEXTJS BANNER FAILED _______________</div>
      </React.Fragment>
    )
  };

  return (
    <React.Fragment>
      <>______________ MFE NEXTJS Banner ______________</>
      <div>{banner}</div>
      <>______________________________________________</>
    </React.Fragment>
  );
};
