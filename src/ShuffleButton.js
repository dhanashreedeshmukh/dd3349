// ShuffleButton.js
import React from 'react';

const ShuffleButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Shuffle
    </button>
  );
};

export default ShuffleButton;
