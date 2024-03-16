// Song.js
import React from 'react';

const Song = ({ title, artist, year }) => {
  return (
    <div>
      <h3>Song</h3>
      <p>Title: {title}</p>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
    </div>
  );
};

export default Song;
