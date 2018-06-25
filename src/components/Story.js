import React from 'react';

const Story = ({ x }) => {
  return (
    <div className="story">
      <img src={x.images.standard_resolution.url} />
    </div>
  );
};

export default Story;
