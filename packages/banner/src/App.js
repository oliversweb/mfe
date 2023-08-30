import React from 'react';

export default ({ data }) => {
  console.log('Banner data: ', data);

  return (
    <React.Fragment>
      <>______________ Banner ______________</>
      <ul>
      {data.sections.map((item) => (
        <li key={item.id}>banner name: {item.name}</li>
      ))}
      </ul>
      <>____________________________________</>
    </React.Fragment>
  );
};
