import React from 'react';

const Story = ({ x }) => {
  return (
    <div className="story">
      {!x.videos ? (
        <a key="link" href={x.link} className="link">
          <img src={x.images.standard_resolution.url} />
          <span className="caption">
            <p>{x.caption.text}</p>
          </span>
        </a>
      ) : (
        <video width={100 + '%'} src={x.videos.standard_resolution.url} controls />
      )}
    </div>
  );
};

export default Story;
