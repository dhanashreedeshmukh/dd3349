import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepForward, faStepBackward, faRandom } from '@fortawesome/free-solid-svg-icons';

const AudioControls = ({ isPlaying, onPlayPause, onNext, onPrev, onShuffle }) => {
  return (
    <div>
      <button onClick={onPrev}><FontAwesomeIcon icon={faStepBackward} /></button>
      <button onClick={onPlayPause}>{isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}</button>
      <button onClick={onNext}><FontAwesomeIcon icon={faStepForward} /></button>
      <button onClick={onShuffle}><FontAwesomeIcon icon={faRandom} /></button>
    </div>
  );
};

export default AudioControls;
