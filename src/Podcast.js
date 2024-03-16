// Podcast.js
import React from 'react';

const Podcast = ({ season, episode, episodeTitle }) => {
  const displayEpisode = season
    ? `Season ${season} Episode ${episode}`
    : `Episode ${episode}`;

  return (
    <div>
      <h3>Podcast</h3>
      <p>Episode Title: {episodeTitle}</p>
      {episode && <p>Episode: {episode}</p>}
      {season && <p>Season: {season}</p>}
    </div>
  );
};

export default Podcast;
