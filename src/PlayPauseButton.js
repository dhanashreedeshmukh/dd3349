// PlayPauseButton.js
import React from 'react';

const PlayPauseButton = ({ isPlaying, onClick }) => {
  return (
    <button onClick={onClick}>
      {isPlaying ? 'Pause' : 'Play'}
    </button>
  );
};

export default PlayPauseButton;
