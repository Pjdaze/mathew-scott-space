import React from 'react';

const Story = ({ x }) => {
  return (
    <div className="story">
      {!x.videos ? (
        <img src={x.images.standard_resolution.url} />
      ) : (
        <video width={100 + '%'} src={x.videos.standard_resolution.url} controls />
      )}
    </div>
  );
};

export default Story;
