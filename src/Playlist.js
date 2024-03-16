// Playlist.js
import React, { useEffect, useState } from 'react';
import Song from './Song';
import Podcast from './Podcast';
import Status from './Status'; // Import the Status component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepForward, faStepBackward, faRandom } from '@fortawesome/free-solid-svg-icons';

const Playlist = () => {
  const [playlistData, setPlaylistData] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/tracks')
      .then(response => response.json())
      .then(data => setPlaylistData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleShuffle = () => {
    const shuffledPlaylist = [...playlistData].sort(() => Math.random() - 0.5);
    setPlaylistData(shuffledPlaylist);
    setCurrentTrackIndex(0);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrev = () => {
    setCurrentTrackIndex(prevIndex => (prevIndex === 0 ? playlistData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentTrackIndex(prevIndex => (prevIndex === playlistData.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDoubleClick = (index) => {
    if (index !== currentTrackIndex) {
      setCurrentTrackIndex(index);
      setIsPlaying(true); // Start playing the clicked song
    }
  };

  const currentTrack = playlistData[currentTrackIndex];

  return (
    <div className="container">
      <div className="audio-player">
        <h2>Playlist</h2>
        <Status
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          onNext={handleNext}
          onPrev={handlePrev}
          onPlayPause={handlePlayPause}
        />
        <div>
          <button onClick={handleShuffle}><FontAwesomeIcon icon={faRandom} /></button>
        </div>
        <ul>
          {playlistData.map((track, index) => (
            <li key={index} onDoubleClick={() => handleDoubleClick(index)}>
              {/* Render Song or Podcast component based on the track */}
              {track.title && track.artist && track.year ? (
                <Song
                  title={track.title}
                  artist={track.artist}
                  year={track.year}
                />
              ) : track.episode ? (
                <Podcast 
                  season={track.season}
                  episodeTitle={track.episodeTitle} 
                  episode={track.episode}
                />
              ) : track.podcast ? (
                <Podcast 
                  podcast={track.podcast}
                  episodeTitle={track.episodeTitle} 
                />
              ) : (
                <p>Unsupported track format</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Playlist;
