import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepForward, faStepBackward, faRandom } from '@fortawesome/free-solid-svg-icons';

const Status = ({ currentTrack, isPlaying, onDoubleClick, onNext, onPrev, onPlayPause }) => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (currentTrack) {
      if (currentTrack.title) {
        setStatus(`Playing: ${currentTrack.title}`);
      } else if (currentTrack.episodeTitle) {
        setStatus(`Playing: ${currentTrack.episodeTitle}`);
      } else if (currentTrack.podcast) {
        setStatus(`Playing: ${currentTrack.podcast}`);
      } else {
        setStatus('Unknown track');
      }
    } else {
      setStatus('');
    }
  }, [currentTrack]);

  const handleNext = () => {
    onNext();
  };

  const handlePrev = () => {
    onPrev();
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      setStatus('Paused');
    } else {
      setStatus(`Playing: ${currentTrack.title}`);
    }
    onPlayPause();
  };

  return (
    <div>
      <p>{status}</p>
      <button onClick={handleNext}><FontAwesomeIcon icon={faStepForward} /></button>
      <button onClick={handlePrev}><FontAwesomeIcon icon={faStepBackward} /></button>
      <button onClick={handlePlayPause}>{isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}</button>
    </div>
  );
};

export default Status;
