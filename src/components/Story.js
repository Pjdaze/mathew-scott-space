import React from 'react';

const Story = ({ x }) => {
  return (
    <div className="story">
      <h1>{x.title}</h1>
      <p>By: {!x.author ? 'Batman' : x.author}</p>
      <p>{x.description}</p>
      <img key={x.url} src={x.urlToImage} />
      <a href={x.url}>View Full Article</a>
    </div>
  );
};

export default Story;
