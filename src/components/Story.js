import React from 'react';

const Story = ({ x }) => {
  return (
    <div key="item.latest" className="story">
      {!x.videos ? (
        <a key="link" href={x.link} className="link">
          <img src={x.images.standard_resolution.url} />
          <span className="caption">
            <p>{x.caption.text}</p>
          </span>
        </a>
      ) : (
        <a key="video-link" href={x.link} className="link">
          <video
            width={100 + '%'}
            src={x.videos.standard_resolution.url}
            controls
            autoPlay="true"
            muted="true"
          />

          <span key="item.caption" className="caption">
            <p className="upper">{x.caption.text}</p>
          </span>
        </a>
      )}
    </div>
  );
};

export default Story;
